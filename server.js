const express = require('express')
// const quotes = require('./quotes')
const fs = require('fs')
const app = express()
const port = 3000;
const server = app.listen(port);
const emit = require('events').EventEmitter

const quotes =
  [
    "My buddy Keith tried camping out on top of a building once. He was shooting crows, but the police were too busy tear gassing him to ask what he was doing up there. He screamed for an entire YEAR every single time he opened his eyes! Oh, man. At first it was funny, then it just got sad, but then it got funny again! Oh, man.",
    "I ever tell you about the time me and Keith made home made bumper car ride with riding mowers in his back yard? Mower blade wounds over ninety percent of his body. I didn't run him over, either. He somehow managed to fall under his own.",
    "I ever tell you about the time my buddy Keith drowned in the Tunnel of Love? You wouldn't think it would happen cause the water's so shallow, but that's how he gets you, man: Over confidence. Keith was with his lady at the time and he was yelling for her to save him but she didn't wanna get wet-",
    "I ever tell you about the time me and Keith snuck up paintball guns on a roller coaster? I never heard of anybody else doing it, so I thought we might have invented a sport. So Keith called the patent office but-",
    "I ever tell you about the time Keith and I made fireworks? Now, I didn't know shit about chemistry, but Keith figured, 'Gasoline burns, doesn't it?'. Third degree burns over ninety-five percent of his body. Man, people in the next city over were calling to complain about the smell of burning skin.",
    "I ever tell you about the time Keith tried to deep fry a turkey? Third degree burns over ninety percent of his body. His doctor called up, like, other doctors to look at him cause they'd never seen burns on top of existing burns-",
    "Man, all this mud remind me of my friend Keith. Yeah, he was goin' to build a shack once, to live in and all, and I know most people here, they build houses and they become shacks, but Keith, he was about jumpin' right to the shack stage. But he had no wood. So he got some mud and was makin' what we were all thinkin' was gonna be this adobe bricks, you know, like when them people out west made bricks and shit? Well, he had mud and...",
    "I ever tell you guys about the time my buddy Keith got rolled by a gator in a swamp? Man, he didn't agonize it or nothing, we were just trying to grab two so we could piss 'em off and get 'em into a fight. Well anyway, the third time Keith went under, I realized something was wrong, so I-",
    "I ever tell you about the time my buddy Keith drove a car off a cliff, broke both his legs? It's not a funny ha-ha story so much as a make-you-think story. For instance: Windshields look pretty durable, right? Not the case, according to Keith. Son of a bitch flew right through that sucker-",
    "Do you know what suck the heads means? Cause I came down here with Keith once, and he didn't know and...I mean, it ain't nothin' bad. It's about eatin'.",
    "I ever tell you about the time me and Keith filled up water balloons with our own-",
    "I ever tell you about the time buddy Keith fell down an open manhole? He was unconcious down there for like a week. During that time, unbeknownst to Keith, they paved over him. Keith had to-",
    "My buddy Keith lived in a graveyard once for a whole year. It wasn't a dare or nothin', he just got kicked out of his house. He said he NEVER saw a single ghost 'cept for this one time when a ghost stabbed him from behind and took all his money, and he might've just been a homeless guy, 'cause he had a robe on with two eyes cut out his face...",
    "One time, the army bombed my buddy Keith. He went camping and didn't bother to read the signs, and I guess they were just testing bombs that day. All sorts of stuff too, not just regular bombs. Like biological nerve gas bombs, shrapnel bombs, these bombs that break up in the air into like a hundred smaller bombs-",
    "This one time, my buddy Keith, on a DARE, got a tattoo: 'I'm a moron' right across his forehead, man. 'Course, he made two hundred bucks off that, so...you ask yourself: Who's the REAL moron, huh?",
    "Yo, my buddy Keith had his car drop in a lake off a bridge just like this one here... Yeah, see, he was driving over it late at night and there in the middle of the bridge was what looked like, In Keith's estimation, like a dead bear, so Keith gets out his car to find a stick to poke at it right? Well, it turns out it's just some lady's fur coat that musta fallen out her car, so, hey, free coat, right? Now, owls won't normally attack a man, but in this case, they were hungry, and that made them reckless, man. Keith reckons that they musta been there for hours watchin' what they thought was a bear carcass, 'cause as soon as he picked it up, them owls had claws in him inch deep. Well, Keith figures his best bet is to jump in a lake, 'cause owls can't swim. Well, them owls could. He fought them for like 20 minutes treading water, and during that time, a boat came, bridge went up and down went Keith's car. Man, sometimes nature's just tryin' to teach us, if we'd only listen.",
    "Hey, y'all, yeah, I like this bridge you got. You know, this reminds me my buddy Keith and I were once on a bridge just like this, man. Well, kinda, I mean, I was on the bridge and Keith was sure he could jump the river without the bridge, so I raised the bridge and well... Did you know cars can float? I mean, for a little while at least...",
    "I ever tell you about the time my buddy Keith made sushi? Yeah, his mom took him to a sushi place for his birthday and he didn't want to go, but he turned out he LOVED it, man. But it's like 10 bucks a su-sho in one of them places, so Keith figures, 'Hey, how hard can it be to roll up some raw food in seaweed,' right? As it turns out, it's hard. Now, they say experience is the best teacher, and experience taught Keith that if you ever eat three pounds of raw chicken, it kills you. Now luckily, Keith's brain went into self-defense mode and started shutting organs down to head the chicken off at the pass, and the doctors were able to get 'em out before his heart stopped. But to this day, Keith has no sensation in his right foot, and he doesn't recognize his own brother Paul no more.",
    "I ever tell you about the time my buddy Keith and I were on the top of a burning building and we had to fight our way down like five floors of zombies? Wait a second. I guess that was you guys. Aww, shit man, I can't wait to tell Keith about that one."
  ]

  app.use(express())
  
  app.get('/', (req, res) => {
    res.redirect('/quote')
  })
  
  app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(randomQuote)
    console.log(Math.floor(Math.random() * quotes.length))
    res.status(200)
  })
  
server

