import turtle
window = turtle.Screen()
alex = turtle.Turtle()
alex.shape("turtle")
for  l in ["yellow", "red", "blue", "purple"]:
    alex.color(l)
alex.pendown()
size =20
for i in range(30):
    alex.stamp()
    size = size + 3
    alex.forward(size)
    alex.left(25)
    
window.mainloop()
