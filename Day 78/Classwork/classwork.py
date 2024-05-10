# task 1

def manual_pop(list, index = -1):
    listn = []
    count = 0
    if index > -1:
        for i in list:
            if count == index:
                pass
            else:
                listn.append(i)
            count += 1
        return listn
    else:
        listn = list
        return listn[:-1]
    

print(manual_pop([1, 2, 3, 4, 5]))

# task 2

def numbers(nums):
    listn = []
    for i in range(nums):
        listn.append(i)
    return listn

print(numbers(10))

# task 3

my_info = {
    'name': "data",
    'age': 16
}

print(my_info.items())