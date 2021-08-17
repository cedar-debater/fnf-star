window.pass = "So you can use pass like python"
window.engine = {
    example: `4
100
(w  as d8)
[(w)(a)(s)(d)8]`,
    init:(function(maybeSong){
        info = {};
        engine.registerSong = function(unparsedSong){/*
Example song:

LINE 1: `asdf hjkl
Keys used - numbers 1 to 9 not allowed.
Spacebar is allowed for this.
Examples
4 (wasd and arrow keys)
WASD (wasd only)
Arrow (arrow only)
WASDArrow (wasd and arrow)
Arrow WASD (wasd and arrow)

6 (asdjkl) ??? / REVENGE
asdjkl

9 (asdf hjkl) GOD EATER / FINAL DESTINATION
asdf hjkl\

LINE 2: 144
Tempo/speed (beats per minute)

LINE 3: 2
Scroll speed

LINE 4: ()(ah7)(asdf hjkl8)`
() means rest
If you want to press spacebar once in song, do this:
( )

(sa) means press keys S and H at same time
(a) and a mean just press key A
(ah7) means press keys A and H at the same time 7 times (1 beat each)
(asdf hjkl8) means press all the keys ASDF(space)HJKL 8 times (1 beat each)
[(w)(a)(s)(d)8] means press W then A then S then D and repeat 8 times (1 beat per note)
Rests allowed here as well
{110} Change tempo to this
Newlines/whitespace don't count here for line 4 meaning
`4
100
(w  as d8)
[(w)(a)(s)(d)8]`
is the same as
`4
100
(wasd10)[(w)( a) (s)(d) 8 ]`*/
            lines = unparsedSong.split('\n');
            info.notesUsed = lines[0];
            info.origTempo = parseInt(lines[1]);
            info.scrollSpeed = parseFloat(lines[2]);
            rawSong = lines.slice(2).join('\n');
            nearSong = rawSong.split('\n').join('')
            trueSong = nearSong.split(' ').join('')
            info.song = trueSong
        };
        if (typeof maybeSong == 'string') {
            engine.registerSong(maybeSong)
        }
        engine.getSong = function(){return info.song;};
        engine.tick = function(){};
    })
};