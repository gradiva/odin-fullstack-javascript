#write your code here
def echo(input)
  input
end

def shout(input) 
  input.upcase
end

def repeat(input, t)
  array = []
  t.times do
    array << input
  end
  array.join(" ")
end

def start_of_word(input, n)
  input.slice(0, n)
end

def first_word(input)
  input.split.shift
end

def titleize string
  little_words = "and over the"
  words = string.split(" ")
  titleized_string = []

  words.each do |word|
    if !little_words.include?(word) 
      titleized_string.push(word.capitalize)
    else
      titleized_string.push(word)
    end
  end
  titleized_string[0] = titleized_string[0].capitalize
  titleized_string.join(" ")    
end
