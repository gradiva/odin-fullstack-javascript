#write your code here
def translate(sentence)
  sentence.split.map do |word|

    word =~ /^     # beginning of string
    (
      [^aeiouyq]*  # any number of consonants in a row
      (qu)?        # or maybe a 'qu'
    )
    (.*)           # the rest of the string
    $/x            # end of string

    first_phoneme = $1
    rest_of_word = $3
    "#{rest_of_word}#{first_phoneme}ay"
  end.join(" ")

end