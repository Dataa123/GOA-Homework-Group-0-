# 1) Merge Lists

def merge_lists(list1, list2):
    return list(set(list1 + list2))

print(merge_lists([1,2,3], [3,4,5]))

# 2) List Comprehension

def list_comp(list):
    return [i**2 for i in list]

print(list_comp([1,2,3,4,5,6]))

# 3) Filter Odd Numbers

def filter(numbers):
    listn = []

    for i in numbers:
        if i % 2 == 0:
            pass
        else:
            listn.append(i)

    return listn

print(filter([1, 2, 3, 4, 5, 6, 7]))

# 4) Find Common Elements

def commons(list1, list2):
    listn = []
    for i in list1:
        if i in list2:
            listn.append(i)
    return listn

print(commons([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))

# 5) List Manipulation

def remove_duplicates(list1):
    return list(set(list1))

print(remove_duplicates([1, 2, 3, 4, 4, 4, 5, 1, 2]))

# 6) Merge Dictionaries

def merge_dict(dict1, dict2):
    dict1.update(dict2)
    return dict1

dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

print(merge_dict(dict1, dict2))

# 7) Dictionary Comprehension

def dict_comp(dictionary):
    my_dict = dict([(key, value ** 2) for key, value in dictionary.items()])
    return my_dict

print(dict_comp({'a': 1, 'b': 2, 'c': 3}))

# 8) Dictionary keys to list

def dict_keys(dictionary):
    listn = [i for i in dictionary.keys()]
    return listn

print(dict_keys({'a': 1, 'b': 2, 'c': 3}))

# 9) Word Frequency Counter:

def frequency(string):
    my_dict = dict()
    my_dict['word'] = string.split(" ")[0]
    my_dict['frequency'] = string.count(my_dict['word'])

    return my_dict

print(frequency("data data data data"))

# 10) Dictionary filtering by Value

def filter_dict(dictionary, value):
    listn = []
    for i in dictionary.items():
        if value in i:
            listn.append(i)
    return listn

print(filter_dict({'name': 'data', 'age': 16}, 'name'))

# 11) Factorial Function

def factorial(num):
    var = 1
    for i in range(1, abs(num) + 1):
        var *= i
    if num % 2 == 0:
        return var
    else:
        return -var
    
print(factorial(-4))
print(factorial(-5))

# 12) Palindrome checker

def palindrome(string):
    if string == string[::-1]:
        return True
    else:
        return False

print(palindrome("ata"))
print(palindrome("data"))

# 13) Anagram Checker

def anagram(str1, str2):
    list1 = list(str1)
    list2 = list(str2)
    if sorted(list1) == sorted(list2):
        return True
    else:
        return False
    
print(anagram("hello", "elloh"))
print(anagram("hello", "ellon"))

# 14) Sentence Reversal

def reversal(sentence):
    listn = sentence.split()
    listn = listn[::-1]
    return " ".join(listn)

print(reversal("Hello World, good luck"))

# 15) Simple To-Do List

def to_do_list(start, event, value):
    if event == "add":
        start['task'] = value
    elif event == "remove":
        start.pop('event')
    elif event == "view":
        start = start.items()
    return start

print(to_do_list({'task1': 'code', 'task2': 'code',}, "add", "code"))

# 16) Combining lists into dictionary

def combine(list1, list2):
    result = dict()
    for i in range(len(list1)):
        result[list1[i]] = list2[i]
    return result

print(combine(['name', 'age'], ['data', 16]))

# 17) Dictionary Key Search

def find(dictionary, key):
    if key in dictionary.keys():
        return True
    else:
        return False
    
print(find({'name': 'data', 'age': 16}, "name"))
print(find({'name': 'data', 'age': 16}, "lastname"))

# 18) Dictionary Value Aggregator

def aggreagator(dictionary):
    result = dict()
    for key, value in dictionary.items():
        result[key] = sum(value)
    return result

print(aggreagator({'list': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}))

# 19) Function to Split List by Value

def splitter(list, value):
    list1 = []
    list2 = []
    for i in list:
        if i < value:
            list1.append(i)
        elif i > value:
            list2.append(i)

    return [list1, list2]

print(splitter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

# 20) List Intersection Counter

def counter(list1, list2):
    res = []
    for i in list1:
        if i in list2:
            res.append(i)
    return len(res)

print(counter([1, 2, 3, 4, 5], [1, 2, 5, 6, 7]))