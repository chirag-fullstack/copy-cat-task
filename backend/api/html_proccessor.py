import xml.etree.ElementTree as ET


class FindDuplicate:
    def __init__(self, html):
        self.tree = ET.ElementTree(ET.fromstring(html))

    def elements_equal(self, e1, e2):
        """
        Args
            e1 and e2: It is an object that has information about tree nodes like tag name,
            text,tail,attributes used in tag
        Return:
            It will return true or false according to equality of elements
        """

        if type(e1) != type(e2):
            return False
        if e1.tag != e2.tag:
            return False
        if e1.text != e2.text:
            return False
        if e1.tail != e2.tail:
            return False
        if e1.attrib != e2.attrib:
            return False
        if len(e1) != len(e2):
            return False
        return all([self.elements_equal(c1, c2) for c1, c2 in zip(e1, e2)])

    def make_key(self, e1):
        """
        This will return tuple which will be unique key

        """

        tup = [(key, value) for key, value in e1.attrib.items()]
        return (e1.tag, e1.text, e1.tail, tuple(tup)) + tuple(
            self.make_key(e) for e in e1
        )

    def find_duplicate(self):
        """
        This will return the duplicate element, as well as count of duplicate element.
        """

        root = self.tree.getroot()
        prev = None

        duplicate_element = {}
        for page in root:

            for elem in page:
                if self.elements_equal(elem, prev):
                    ele_key = self.make_key(elem)
                    if ele_key in duplicate_element:
                        duplicate_element[ele_key]["count"] += 1
                    else:
                        duplicate_element[ele_key] = {"count": 2, "elem": elem}
                    continue
                prev = elem
        return self.make_response(duplicate_element)

    def make_response(self, response_dict):
        """
        This will create a final response list that will have name of tag,text value,occurence.
        """

        response = []
        for element_key in response_dict:
            element_obj = response_dict[element_key]
            response.append(
                {
                    "name": element_obj["elem"].tag,
                    "value": element_obj["elem"].text
                    if element_obj["elem"].text
                    else "",
                    "occurrence": element_obj["count"],
                }
            )
        return response
