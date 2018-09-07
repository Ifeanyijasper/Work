h=int(input("intial time(in hours): "))
z=int(input("number of hours: "))
p=(z)+(h)
d=(p)%24
if d>12:
    print(d-12 ,"pm")
else:
     print(d,"am")
