# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Psuedocode: 
# define a method that has a parameter of a number and takes an number (num1, num2, num3) as an argument 
# set a conditional statement to review if the number is even or odd 
    # If the number is odd (method .odd?) return string interpolation "#{num} is odd"
    # If the number is even(method .even?) return string interpolation "#{num} is even"

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd num 
    if num.even?
       p "#{num} is even"
    elsif num.odd?
       p "#{num} is odd"
    end
end

even_or_odd num1 
#output: "7 is odd"
even_or_odd num2
#output: "42 is even"
even_or_odd num3
#output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Psuedocode: 
# Create a method name my_str with the parameter of the string and takes in a variable assigned to a string as an argument 
# Utilize .delete method to remove any characters with vowels of aeiou, including AEIOU (I will need to pass A in the delete method so it can find any vowels that are capatized)

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def my_str string 
   p string.delete 'AEIOUaeiou'
end

my_str beatles_album1
#output: "Rbbr Sl"
my_str beatles_album2
#output: "Sgt Pppr"
my_str beatles_album3
#output: "bby Rd" 

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Psuedocode: define a method called is_pali with a parameter of a string and takes in an argument of a variable assigned to a string 
# use conditional statements to review that if string is equal the string reverse (can use method .reverse)
    # if the string and the string reverse is the same, then return "it is a palindrome"
    # if the string and the string reverse is NOT the same, then return "it is not a palindrome"
        # use method .downcase to ensure that the string will be in all lowercase when it is being compared the the string reversed 
    # for the output to include the string that was passed as an argument, use the string intropolation 


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_pali string 
    if string.downcase == string.reverse.downcase
        "#{string} is a palindrome"
    elsif string.downcase != string.reverse.downcase
        "#{string} is not a palindrome"
    end
end 

p is_pali palindrome_tester1
#output: "Racecar is a palindrome"
p is_pali palindrome_tester2
#output: "LEARN is not a palindrome"
p is_pali palindrome_tester3
#output: "Rotator is a palindrome"

