function Encryptedcode () {
    var  peace = prompt ("Ready!! time to encode!!")
    var replace1 = peace.replace(/a/g, "a");
    var replace2 = replace1.replace(/b/g,"");
    var replace3 = replace2.replace(/c/g,"c");
    var replace4 = replace3.replace(/d/g,"d");
    var replace5 = replace4.replace(/e/g,"e");
    var replace6 = replace5.replace(/f/g,"Fenrir");
    var replace7 = replace6.replace(/g/g,"g");
    var replace8 = replace7.replace(/h/g,"h"); 
    var replace9 = replace8.replace(/i/g,"i");
    var replace10 = replace9.replace(/j/g,"j");
    var replace11 = replace10.replace(/k/g,"Kraken");
    var replace12 = replace11.replace(/l/g,"Linedworm");
    var replace13 = replace12.replace(/m/g,"m");
    var replace14 = replace13.replace(/n/g,"n");
    var replace15 = replace14.replace(/o/g,"Ogre");
    var replace16 = replace15.replace(/p/g,"Pegasus");
    var replace17 = replace16.replace(/q/g,"q");
    var replace18 = replace17.replace(/r/g,"r");
    var replace19 = replace18.replace(/s/g,"s");
    var replace20 = replace19.replace(/t/g,"Trolls");
    var replace21 = replace20.replace(/w/g,"w");
    var replace22 = replace21.replace(/v/g,"v");
    var replace23 = replace22.replace(/x/g,"x");
    var replace24 = replace23.replace(/y/g,"y");
    var replace25 = replace24.replace(/z/g,"z");
    var replace26 = replace25.replace(/u/g,"u");
document.getElementById("codedmessage").innerHTML = replace26;
}
function Decrytedcoded (){
var out = prompt ("Ready to decode?? Letsssss goooo")
    var fly1 = out.replace(/Fenrir/g,"f");
    var fly2 = fly1.replace(/Kraken/g,"k");
    var fly3 = fly2.replace(/Ogre/g,"o");
    var fly4 = fly3.replace(/Pegasus/g,"p");
    var fly5 = fly4.replace(/Trolls/g,"t");
    var fly6 = fly5.replace(/Linedworm/g,"l")
document.getElementById("uncodedmessage").innerHTML = fly6;
}