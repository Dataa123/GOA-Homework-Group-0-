def convert_do_dec(b):
    res = 0
    b = str(b)

    for i in range(len(b)):
        res += (2 ** int(i)) * int(b[::-1][i])
    
    return res


print(convert_do_dec(100000))
print(convert_do_dec(11111))
print(convert_do_dec(1000))
print(convert_do_dec(11101))
print(convert_do_dec(1100010))
print(convert_do_dec(11111011))
print(convert_do_dec(10000))
print(convert_do_dec(10001010))
print(convert_do_dec(1110))