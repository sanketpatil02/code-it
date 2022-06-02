export const question_data = [
  {
    _id: 1,
    question_name: "Reverse array",
    difficulty: "Easy",
    submissions: "100",
    points: "100",
    description:
      "For a given array reverse order of its elements.",
    input:
      "The first line of input contains integer t, the number of test cases. In the next t lines t test cases follow. Each test case cosists of numbers separated by spaces. In each line, the first number ni is the length of an array. Next ni numbers are values of the array.",
    output:
      "For each test case print elements of the array in reversed order. Numbers should be separated by single space and answers for each test case should appear in a separate line.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "2 <br/>7 1 2 3 4 5 6 7 <br/>3 3 2 11",
    sample_output: "7 6 5 4 3 2 1<br/>11 2 3",
    tag: "Array",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=7WUktUkpbA",
  },
  {
    _id: 2,
    question_name: "Life, the Universe, and Everything",
    difficulty: "Medium",
    submissions: "1",
    points: "200",
    description:
      "Chef and Divyam are playing a game with the following rules: \n First, an integer X! is written on a board.\n Chef and Divyam alternate turns; Chef plays first.\n In each move, the current player should choose a positive integer D which is divisible by up to Y distinct primes and does not exceed the integer currently written on the board. Note that 1 is not a prime.\n D is then subtracted from the integer on the board, i.e. if the integer written on the board before this move was A, it is erased and replaced by A−D.\n When one player writes 0 on the board, the game ends and this player wins.\n Given X and Y, determine the winner of the game.",
    input:
      "The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.<br/> The first and only line of each test case contains two space-separated integers X and Y.",
    output:
      "For each test case, print a single line containing the string Chef if Chef wins the game or Divyam if Divyam wins (without quotes).",
    // constaints: "1≤T≤106 <br/> 1≤X,Y≤106",
    sample_input: "3 <br/> 1 2 <br/> 3 1 <br/> 2021 42",
    sample_output: "Chef <br/> Divyam  <br/>Divyam",
    tag: "String",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=GQJau0B8Zb",
  },
  {
    _id: 3,
    question_name: " Longest Connected Subsequence",
    difficulty: "Hard",
    submissions: "400",
    points: "300",
    description:
      "Connected subsequence is a certain amount of consecutive terms of the given sequence. For example in the sequence lambdacalculusisfun the highlighted part lusis is a connected subsequence. For a given binary sequence and the number k > 0 you have to determine how long is the longest connected subsequence which contains at most k ones. For example for the sequence 010110101001 and k=2 the correct answer is 6 (i.e. 010110101001).",
    input:
      "The first line of the input contains a number T which is a number of test cases. Each test case consists of two lines: <br/> the first one contains the length l of the binary sequence and the value of k, <br/> the second one is the binary sequence. You can assume that the length of the sequence is less than or equal to 100,000 and k ≤ 1000.",
    output:
      "In the ith line print the length of the longest connected subsequence for the ith test case from the input.",
    // constaints: "1≤T≤106 <br/> 1≤X,Y≤106",
    sample_input: "3<br/>10 1<br/>0101000001<br/>12 2<br/>010110101001<br/>15 3<br/>101000011100100",
    sample_output: "7<br/>6<br/>9",
    tag: "Math",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=ODduMWU8l2",
  },
  {
    _id: 4,
    question_name: "Caesar cipher",
    difficulty: "Easy",
    submissions: "100",
    points: "100",
    description:
      "Caesar cipher took its name from Julius Caesar who used it while writing letters to Cicero. Interesting thing is that this code was still used in 1915 by the Russian army because only such a simple cipher seemed understandable for staff officers.<br/>The cipher works as follows: <br/>Each letter from an decrypted text is changed to another letter from the Latin alphabet. According to the rule it has to be the third letter on the right from the one we want to encrypt. Thus the letter A is encrypted as D, letter B as E, etc. The letter Z is changed to C. In order to decrypt the text we repeat the operation by moving letters by three positions to the left.",
    input:
      "As an input you get a text that contains only uppercase letters of the Latin alphabet, spaces and newline characters. The length of input does not exceed 200 characters.",
    output:
      "Output should contain text encrypted with the Caesar cipher.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "ABC DEF<br/>TERA EST ROTUNDA",
    sample_output: "DEF GHI<br/>WHUD HVW URWXQGD",
    tag: "String",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=RY17XFq6Rr",
  },
  {
    _id: 5,
    question_name: "Collinear points",
    difficulty: "Medium",
    submissions: "100",
    points: "200",
    description:
      "Check if 3 provided points are collinear or not.",
    input:
      "The first line of input contains single number t (1 ≤ t ≤ 100) which corresponds to the number of tests. Each of the next t lines contains integer coordinates of three points in range [-1000, 1000]. Coordinates are seperated by tab.",
    output:
      "Print 'YES' if three points are collinear or 'NO' otherwise. Every answer should be printed in a separate line.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "5<br/>1   2   3   4   5   6<br/>1   3   1   4   1   -3<br/>1   2   -3  4   3   9<br/>2   -1  3   -1  -4  -1<br/>0   0   0   0   0   0<br/>",
    sample_output: "YES<br/>YES<br/>NO<br/>YES<br/>YES",
    tag: "Math",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=RP4s7lrFL6",
  },
  {
    _id: 6,
    question_name: "Comparing large numbers",
    difficulty: "Easy",
    submissions: "100",
    points: "100",
    description:
      "Write a program which checks whether a given relation is true for a given pair of numbers.",
    input:
      "TYou are provided with an unknown number of test cases. Each test case consists of a natural number, which is followed by a white space, relational operator (==, !=, >= or <=), white space, and another natural number. All test cases are separated with a new line character. You can assume that no number has more than 1000 digits.",
    output:
      "A binary sequence should appear on the output. ith element of the sequence should be equal to 1 or 0, depending on whether the corresponding relation is true or false. All elements of the sequence should be separated with a new line character.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "100 == 200<br/>200 <= 100<br/>200 >= 100",
    sample_output: "0<br/>0<br/>1",
    tag: "Algorithms",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=56pKSF3cEq",
  },
  {
    _id: 7,
    question_name: "Matrix transposition",
    difficulty: "Hard",
    submissions: "100",
    points: "300",
    description:
      "Transpose the given matrix.",
    input:
      "The first line of input contains two numbers m and n (1 ≤ m, n ≤ 200) corresponding to the number of rows and the number columns of the matrix respectively. It is then followed by m rows with n numbers in each column.",
    output:
      "The output should contain a transposed matrix.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "4 3<br/>1 2 5<br/>4 3 3<br/>3 4 9<br/>8 7 7",
    sample_output: "1 4 3 8<br/>2 3 4 7<br/>5 3 9 7",
    tag: "Array",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=nqgyLBAFzT",
  },
  {
    _id: 8,
    question_name: "Caesar cipher",
    difficulty: "Hard",
    submissions: "100",
    points: "300",
    description:
      "Caesar cipher took its name from Julius Caesar who used it while writing letters to Cicero. Interesting thing is that this code was still used in 1915 by the Russian army because only such a simple cipher seemed understandable for staff officers.<br/>The cipher works as follows: <br/>Each letter from an decrypted text is changed to another letter from the Latin alphabet. According to the rule it has to be the third letter on the right from the one we want to encrypt. Thus the letter A is encrypted as D, letter B as E, etc. The letter Z is changed to C. In order to decrypt the text we repeat the operation by moving letters by three positions to the left.",
    input:
      "As an input you get a text that contains only uppercase letters of the Latin alphabet, spaces and newline characters. The length of input does not exceed 200 characters.",
    output:
      "Output should contain text encrypted with the Caesar cipher.",
    // constaints: "1≤T≤100 1≤L≤R≤105",
    sample_input: "ABC DEF<br/>TERA EST ROTUNDA",
    sample_output: "DEF GHI<br/>WHUD HVW URWXQGD",
    tag: "String",
    question_link:
      "https://1236d10a.widgets.sphere-engine.com/lp?hash=RY17XFq6Rr",
  },
];
