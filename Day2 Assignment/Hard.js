var word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
var loveCount = word.match(/love/ig).length;
console.log(loveCount);

var phrase = 'You cannot end a sentence with because because because is a conjunction' ;
console.log(phrase.match(/because/g).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' ;
var sentenceArr = sentence.split(' ');
var newSentence = "";
for(let i = 0 ; i < sentenceArr.length ; i++ ) {
    var newWord = sentenceArr[i].match(/[A-Z,.;/?]/gi).join('')
    newSentence = newSentence+newWord+" ";
}
console.log(newSentence);

var text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' ;
var textArr = text.split(' ');
var totalIncome = 0;
for(let i = 0 ; i < textArr.length ; i++ ) {
    var num = textArr[i].match(/[0-9]/g)
    if(num != null) {
        totalIncome += parseInt(num.join(''))
    }
}
console.log(totalIncome);