#write your code here
def add(a,b)
  a+b
end

def subtract(a,b)
  a-b
end

def sum(array)
	sum = 0
	array.each do |i|
		sum += i
	end
	sum
end

def multiply(*values)
	sum = 1
	values.each do |i|
		sum *= i
	end
	sum
end

def power(a,b)
	a ** b
end

def factorial(a)
	if a == 0
		1
	else
		a * factorial(a - 1)
	end
end