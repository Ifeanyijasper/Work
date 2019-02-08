n = 25
threshold = 0.001
approximation = n/2
while True:
    better = ( approximation + n/approximation)/2
    if abs(approximation - better) < threshold:
        print(better)
        break
    approximation = better
