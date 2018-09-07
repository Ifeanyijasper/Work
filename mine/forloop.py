import turtle
window = turtle.Screen()
window.bgcolor("lightpink")

alex = turtle.Turtle()
alex.shape("classic")
alex.pendown()
size = 20
for friend in range(30):
    alex.stamp()
    size = size + 3
    alex.forward(size)
    alex.left(30)
    
