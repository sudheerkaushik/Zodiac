"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({
            id: 1,
            name: "Aries",
            facts: [
                {
                    fact1: "Don’t mess with them, they know themselves better than you do.."
                },
                {
                    fact2: "90% of the times, their mood is like “Please don’t wreck my aura”"
                },
                {
                    fact3: "It is really straightforward for them, you either show up or keep your mouth shut."
                },
                {
                    fact4: "Don’t dare to mess with an Aries woman, she will drag you to hell and mind you she will do it carrying that contagious smile on her face."
                },
                {
                    fact5: "When an Aries shows up, better stay out of their way."
                }
            ],
            image: "~/images/zodiac/zodiac_11.png"
        }, {
            id: 2,
            name: "Tauras",
            facts: [
                {
                    fact1: "These guys have a high tolerance for any sh*t, but if you exceed that limit, you better be prepared for the consequences."
                },
                {
                    fact2: "They are carefree. You might think, they are thinking about something serious but in reality they are sh*t worried just about they are eating for lunch."
                },
                {
                    fact3: "You can never think of breaking these people, they are hard core fighters. They will fight beyond you can even imagine."
                },
                {
                    fact4: "You better be least dramatic with them, they wouldn’t prefer hanging out with you ever again if you are that so called “melodramatic”."
                },
                {
                    fact5: "The funniest part about them is if they are making fun of you, believe it, it simply means they are protecting you."
                }
            ],
            image: "~/images/zodiac/zodiac_13.png"
        }, {
            id: 3,
            name: "Gemini",
            facts: [
                {
                    fact1: "Don’t bother yourself to judge if a Gemini loves you or not. Be patient and calm to get the answer."
                },
                {
                    fact2: "They don’t need your silly jokes to give them happiness, they are enough for themselves."
                },
                {
                    fact3: "These guys are hell of smart, they will sit in a corner and just think,     mind you for them this is an exercise for their brains."
                },
                {
                    fact4: "If they pull themselves first while you are kissing, then be assured you have blown it."
                },
                {
                    fact5: "Geminis are passionate, they would relish to indulge in healthy flirting with you."
                }
            ],
            image: "~/images/zodiac/zodiac_15.png"
        }, {
            id: 4,
            name: "Cancer",
            facts: [
                {
                    fact1: "Cancerians are shy people, but give them 2 shots and you will laugh out loud seeing what happens."
                },
                {
                    fact2: "These guys are f*cking foodies, love eating but hate sharing. So, feel yourself privileged and lucky, if they share their food with you."
                },
                {
                    fact3: "You better don’t lie to them, these super smart fellas to judge you well. Better be what you are in front of them."
                },
                {
                    fact4: "Messing with a Cancerian…OK Fine! Thinking to wreck their family or friends, stay back, hold on….they will burn you down."
                },
                {
                    fact5: "You preferably start to adjust with your cancerian partner mood swings, they are like that."
                }
            ],
            image: "~/images/zodiac/zodiac_21.png"
        }, {
            id: 5,
            name: "Leo",
            facts: [
                {
                    fact1: "Don’t be impatient to judge a Leo. They are sort of choosy and take time to get comfortable with you."
                },
                {
                    fact2: "Don’t dare to screw with them. From the most sweetest person on Earth, they can turn to someone who is way too rude to handle."
                },
                {
                    fact3: "One word to explain a Leo’s personality: Amazing"
                },
                {
                    fact4: "They love imagination and fantasy world."
                },
                {
                    fact5: "They are full of affection and love. If you are the partner, don’t be surprised if they spend the whole day wrapped in your arms."
                }
            ],
            image: "~/images/zodiac/zodiac_23.png"
        }, {
            id: 6,
            name: "Virgo",
            facts: [
                {
                    fact1: "If you are lucky enough, you might get to see the wild side of Virgos."
                },
                {
                    fact2: "Virgos     are the sole inventors of the so called “Plan B”. They will always have a backup plan, if you ditch on the last moment."
                },
                {
                    fact3: "Count on these fellas for a true opinion regarding any topic, beware it might even hurt as they would speak the truth."
                },
                {
                    fact4: "They can’t tolerate any sort of bullsh*t. They will leave at the first sight of it."
                },
                {
                    fact5: "Virgos     strongly believe in themselves. So don’t think they will fight back during an argument or even try to explain things."
                }
            ],
            image: "~/images/zodiac/zodiac_25.png"
        }, {
            id: 7,
            name: "Libra",
            facts: [
                {
                    fact1: "You will be lucky to have them as your partner. They will be there for you each time you need them."
                },
                {
                    fact2: "These guys are quick to fall, will forgive easily, care for someone like anything but definitely this s*cks at times."
                },
                {
                    fact3: "Funny     but at times a Libra will become their own worst enemy."
                },
                {
                    fact4: "You don’t have a logic to support your conversation, sorry these guys have no time for such useless talks."
                },
                {
                    fact5: "They are bad at making decisions, their minds fluctuate like a switch."
                }
            ],
            image: "~/images/zodiac/zodiac_31.png"
        }, {
            id: 8,
            name: "Scorpio",
            facts: [
                {
                    fact1: "Simply be transparent, don’t hide things and speak the truth, this what a Scorpio looks for in their love partner."
                },
                {
                    fact2: "These guys are too hard to be predicted. You can’t read their face to tell about their qualities."
                },
                {
                    fact3: "Try these fellas only if you are ready for a commitment, else better keep that distance."
                },
                {
                    fact4: "Don’t even think about f*cking with them, they are like the two ends of a string."
                },
                {
                    fact5: "Don’t bother to play a question hour with these people, they are least interested."
                }
            ],
            image: "~/images/zodiac/zodiac_33.png"
        }, {
            id: 9,
            name: "Sagittarius",
            facts: [
                {
                    fact1: "Trying     to tame a Sagittarian, not worth the efforts, they love to be set free."
                },
                {
                    fact2: "Don’t be astonished to check their reserves of memories. They can relate to something that might have happened ages ago."
                },
                {
                    fact3: "They are honest and hate those sugar-coated and sweet talks. Better be straightforward with them."
                },
                {
                    fact4: "Sagittarians can be freaks, crazy, wild on one hand and on the other maintain their tradition."
                },
                {
                    fact5: "Short-tempered but the best part their anger vanishes within seconds."
                }
            ],
            image: "~/images/zodiac/zodiac_35.png"
        }, {
            id: 10,
            name: "Capricorn",
            facts: [
                {
                    fact1: "If you are an attention seeker, expect nothing from Capricorns."
                },
                {
                    fact2: "You might not like their honesty. They will cook up conversation in a funny manner to speak out the truth."
                },
                {
                    fact3: "Messed up with a Capricorn, watch out for the hard time coming your way."
                },
                {
                    fact4: "They can be the funniest people to hang out with in a party."
                },
                {
                    fact5: "Allow them to amaze you and you will get a crazy Capricorn in turn."
                }
            ],
            image: "~/images/zodiac/zodiac_01.png"
        }, {
            id: 11,
            name: "Aquarius",
            facts: [
                {
                    fact1: "They don’t give a damn about what people think of them; they will present themselves the way they want to."
                },
                {
                    fact2: "At the end of the day, they need time for themselves to think     over their actions carried out in the da"
                },
                {
                    fact3: "Don’t call for problems by judging an Aquarius before you actually know about them."
                },
                {
                    fact4: "Don’t even think of controlling them, they will break all rules to make you understand where you stand."
                },
                {
                    fact5: "If you like being rough in the bedroom, you will love to be accompanied by an Aquarius partner."
                }
            ],
            image: "~/images/zodiac/zodiac_03.png"
        }, {
            id: 12,
            name: "Pisces",
            facts: [
                {
                    fact1: "They might forget what they wore yesterday but will never forget what you     did with them ages ago."
                },
                {
                    fact2: "You will find them funny, believe it, that is their secret weapon."
                },
                {
                    fact3: "They don’t have the time or even bother to argue with you, they prefer being silent and let you think what you wish to."
                },
                {
                    fact4: "They will stand by your side for lifetime if you are able to win their     trust and friendship."
                },
                {
                    fact5: "They are good at judging people and with time, can make out your weakness."
                }
            ],
            image: "~/images/zodiac/zodiac_05.png"
        });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDSDtvQkFDSSxLQUFLLEVBQ0QsaUVBQWlFO2lCQUN4RTtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QsbUVBQW1FO2lCQUMxRTtnQkFDRDtvQkFDSSxLQUFLLEVBQ0Qsb0ZBQW9GO2lCQUMzRjtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QsMklBQTJJO2lCQUNsSjtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QsdURBQXVEO2lCQUM5RDthQUNKO1lBQ0QsS0FBSyxFQUFFLCtCQUErQjtTQUN6QyxFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRTtnQkFDSDtvQkFDSSxLQUFLLEVBQ0QsMkhBQTJIO2lCQUNsSTtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QsMEpBQTBKO2lCQUNqSztnQkFDRDtvQkFDSSxLQUFLLEVBQ0QseUhBQXlIO2lCQUNoSTtnQkFDRDtvQkFDSSxLQUFLLEVBQ0Qsd0lBQXdJO2lCQUMvSTtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QscUhBQXFIO2lCQUM1SDthQUNKO1lBQ0QsS0FBSyxFQUFFLCtCQUErQjtTQUN6QyxFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRTtnQkFDSDtvQkFDSSxLQUFLLEVBQ0QscUdBQXFHO2lCQUM1RztnQkFDRDtvQkFDSSxLQUFLLEVBQ0QsMEZBQTBGO2lCQUNqRztnQkFDRDtvQkFDSSxLQUFLLEVBQ0QscUlBQXFJO2lCQUM1STtnQkFDRDtvQkFDSSxLQUFLLEVBQ0QseUZBQXlG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SUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUE5VVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQStVdkI7SUFBRCxrQkFBQztDQUFBLEFBL1VELElBK1VDO0FBL1VZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIkFyaWVzXCIsXG4gICAgICAgICAgICBmYWN0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRvbuKAmXQgbWVzcyB3aXRoIHRoZW0sIHRoZXkga25vdyB0aGVtc2VsdmVzIGJldHRlciB0aGFuIHlvdSBkby4uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjkwJSBvZiB0aGUgdGltZXMsIHRoZWlyIG1vb2QgaXMgbGlrZSDigJxQbGVhc2UgZG9u4oCZdCB3cmVjayBteSBhdXJh4oCdXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkl0IGlzIHJlYWxseSBzdHJhaWdodGZvcndhcmQgZm9yIHRoZW0sIHlvdSBlaXRoZXIgc2hvdyB1cCBvciBrZWVwIHlvdXIgbW91dGggc2h1dC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRG9u4oCZdCBkYXJlIHRvIG1lc3Mgd2l0aCBhbiBBcmllcyB3b21hbiwgc2hlIHdpbGwgZHJhZyB5b3UgdG8gaGVsbCBhbmQgbWluZCB5b3Ugc2hlIHdpbGwgZG8gaXQgY2FycnlpbmcgdGhhdCBjb250YWdpb3VzIHNtaWxlIG9uIGhlciBmYWNlLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGVuIGFuIEFyaWVzIHNob3dzIHVwLCBiZXR0ZXIgc3RheSBvdXQgb2YgdGhlaXIgd2F5LlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3pvZGlhYy96b2RpYWNfMTEucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiBcIlRhdXJhc1wiLFxuICAgICAgICAgICAgZmFjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QxOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVzZSBndXlzIGhhdmUgYSBoaWdoIHRvbGVyYW5jZSBmb3IgYW55IHNoKnQsIGJ1dCBpZiB5b3UgZXhjZWVkIHRoYXQgbGltaXQsIHlvdSBiZXR0ZXIgYmUgcHJlcGFyZWQgZm9yIHRoZSBjb25zZXF1ZW5jZXMuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXkgYXJlIGNhcmVmcmVlLiBZb3UgbWlnaHQgdGhpbmssIHRoZXkgYXJlIHRoaW5raW5nIGFib3V0IHNvbWV0aGluZyBzZXJpb3VzIGJ1dCBpbiByZWFsaXR5IHRoZXkgYXJlIHNoKnQgd29ycmllZCBqdXN0IGFib3V0IHRoZXkgYXJlIGVhdGluZyBmb3IgbHVuY2guXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIllvdSBjYW4gbmV2ZXIgdGhpbmsgb2YgYnJlYWtpbmcgdGhlc2UgcGVvcGxlLCB0aGV5IGFyZSBoYXJkIGNvcmUgZmlnaHRlcnMuIFRoZXkgd2lsbCBmaWdodCBiZXlvbmQgeW91IGNhbiBldmVuIGltYWdpbmUuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIllvdSBiZXR0ZXIgYmUgbGVhc3QgZHJhbWF0aWMgd2l0aCB0aGVtLCB0aGV5IHdvdWxkbuKAmXQgcHJlZmVyIGhhbmdpbmcgb3V0IHdpdGggeW91IGV2ZXIgYWdhaW4gaWYgeW91IGFyZSB0aGF0IHNvIGNhbGxlZCDigJxtZWxvZHJhbWF0aWPigJ0uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBmdW5uaWVzdCBwYXJ0IGFib3V0IHRoZW0gaXMgaWYgdGhleSBhcmUgbWFraW5nIGZ1biBvZiB5b3UsIGJlbGlldmUgaXQsIGl0IHNpbXBseSBtZWFucyB0aGV5IGFyZSBwcm90ZWN0aW5nIHlvdS5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy96b2RpYWMvem9kaWFjXzEzLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogXCJHZW1pbmlcIixcbiAgICAgICAgICAgIGZhY3RzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRG9u4oCZdCBib3RoZXIgeW91cnNlbGYgdG8ganVkZ2UgaWYgYSBHZW1pbmkgbG92ZXMgeW91IG9yIG5vdC4gQmUgcGF0aWVudCBhbmQgY2FsbSB0byBnZXQgdGhlIGFuc3dlci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhleSBkb27igJl0IG5lZWQgeW91ciBzaWxseSBqb2tlcyB0byBnaXZlIHRoZW0gaGFwcGluZXNzLCB0aGV5IGFyZSBlbm91Z2ggZm9yIHRoZW1zZWx2ZXMuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXNlIGd1eXMgYXJlIGhlbGwgb2Ygc21hcnQsIHRoZXkgd2lsbCBzaXQgaW4gYSBjb3JuZXIgYW5kIGp1c3QgdGhpbmssICAgICBtaW5kIHlvdSBmb3IgdGhlbSB0aGlzIGlzIGFuIGV4ZXJjaXNlIGZvciB0aGVpciBicmFpbnMuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIklmIHRoZXkgcHVsbCB0aGVtc2VsdmVzIGZpcnN0IHdoaWxlIHlvdSBhcmUga2lzc2luZywgdGhlbiBiZSBhc3N1cmVkIHlvdSBoYXZlIGJsb3duIGl0LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHZW1pbmlzIGFyZSBwYXNzaW9uYXRlLCB0aGV5IHdvdWxkIHJlbGlzaCB0byBpbmR1bGdlIGluIGhlYWx0aHkgZmxpcnRpbmcgd2l0aCB5b3UuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvem9kaWFjL3pvZGlhY18xNS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6IFwiQ2FuY2VyXCIsXG4gICAgICAgICAgICBmYWN0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNhbmNlcmlhbnMgYXJlIHNoeSBwZW9wbGUsIGJ1dCBnaXZlIHRoZW0gMiBzaG90cyBhbmQgeW91IHdpbGwgbGF1Z2ggb3V0IGxvdWQgc2VlaW5nIHdoYXQgaGFwcGVucy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlc2UgZ3V5cyBhcmUgZipja2luZyBmb29kaWVzLCBsb3ZlIGVhdGluZyBidXQgaGF0ZSBzaGFyaW5nLiBTbywgZmVlbCB5b3Vyc2VsZiBwcml2aWxlZ2VkIGFuZCBsdWNreSwgaWYgdGhleSBzaGFyZSB0aGVpciBmb29kIHdpdGggeW91LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgYmV0dGVyIGRvbuKAmXQgbGllIHRvIHRoZW0sIHRoZXNlIHN1cGVyIHNtYXJ0IGZlbGxhcyB0byBqdWRnZSB5b3Ugd2VsbC4gQmV0dGVyIGJlIHdoYXQgeW91IGFyZSBpbiBmcm9udCBvZiB0aGVtLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q0OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNZXNzaW5nIHdpdGggYSBDYW5jZXJpYW7igKZPSyBGaW5lISBUaGlua2luZyB0byB3cmVjayB0aGVpciBmYW1pbHkgb3IgZnJpZW5kcywgc3RheSBiYWNrLCBob2xkIG9u4oCmLnRoZXkgd2lsbCBidXJuIHlvdSBkb3duLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgcHJlZmVyYWJseSBzdGFydCB0byBhZGp1c3Qgd2l0aCB5b3VyIGNhbmNlcmlhbiBwYXJ0bmVyIG1vb2Qgc3dpbmdzLCB0aGV5IGFyZSBsaWtlIHRoYXQuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvem9kaWFjL3pvZGlhY18yMS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIG5hbWU6IFwiTGVvXCIsXG4gICAgICAgICAgICBmYWN0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRvbuKAmXQgYmUgaW1wYXRpZW50IHRvIGp1ZGdlIGEgTGVvLiBUaGV5IGFyZSBzb3J0IG9mIGNob29zeSBhbmQgdGFrZSB0aW1lIHRvIGdldCBjb21mb3J0YWJsZSB3aXRoIHlvdS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRG9u4oCZdCBkYXJlIHRvIHNjcmV3IHdpdGggdGhlbS4gRnJvbSB0aGUgbW9zdCBzd2VldGVzdCBwZXJzb24gb24gRWFydGgsIHRoZXkgY2FuIHR1cm4gdG8gc29tZW9uZSB3aG8gaXMgd2F5IHRvbyBydWRlIHRvIGhhbmRsZS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT25lIHdvcmQgdG8gZXhwbGFpbiBhIExlb+KAmXMgcGVyc29uYWxpdHk6IEFtYXppbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhleSBsb3ZlIGltYWdpbmF0aW9uIGFuZCBmYW50YXN5IHdvcmxkLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGV5IGFyZSBmdWxsIG9mIGFmZmVjdGlvbiBhbmQgbG92ZS4gSWYgeW91IGFyZSB0aGUgcGFydG5lciwgZG9u4oCZdCBiZSBzdXJwcmlzZWQgaWYgdGhleSBzcGVuZCB0aGUgd2hvbGUgZGF5IHdyYXBwZWQgaW4geW91ciBhcm1zLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3pvZGlhYy96b2RpYWNfMjMucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBuYW1lOiBcIlZpcmdvXCIsXG4gICAgICAgICAgICBmYWN0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdSBhcmUgbHVja3kgZW5vdWdoLCB5b3UgbWlnaHQgZ2V0IHRvIHNlZSB0aGUgd2lsZCBzaWRlIG9mIFZpcmdvcy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlyZ29zICAgICBhcmUgdGhlIHNvbGUgaW52ZW50b3JzIG9mIHRoZSBzbyBjYWxsZWQg4oCcUGxhbiBC4oCdLiBUaGV5IHdpbGwgYWx3YXlzIGhhdmUgYSBiYWNrdXAgcGxhbiwgaWYgeW91IGRpdGNoIG9uIHRoZSBsYXN0IG1vbWVudC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ291bnQgb24gdGhlc2UgZmVsbGFzIGZvciBhIHRydWUgb3BpbmlvbiByZWdhcmRpbmcgYW55IHRvcGljLCBiZXdhcmUgaXQgbWlnaHQgZXZlbiBodXJ0IGFzIHRoZXkgd291bGQgc3BlYWsgdGhlIHRydXRoLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q0OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGV5IGNhbuKAmXQgdG9sZXJhdGUgYW55IHNvcnQgb2YgYnVsbHNoKnQuIFRoZXkgd2lsbCBsZWF2ZSBhdCB0aGUgZmlyc3Qgc2lnaHQgb2YgaXQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpcmdvcyAgICAgc3Ryb25nbHkgYmVsaWV2ZSBpbiB0aGVtc2VsdmVzLiBTbyBkb27igJl0IHRoaW5rIHRoZXkgd2lsbCBmaWdodCBiYWNrIGR1cmluZyBhbiBhcmd1bWVudCBvciBldmVuIHRyeSB0byBleHBsYWluIHRoaW5ncy5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy96b2RpYWMvem9kaWFjXzI1LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgbmFtZTogXCJMaWJyYVwiLFxuICAgICAgICAgICAgZmFjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QxOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3Ugd2lsbCBiZSBsdWNreSB0byBoYXZlIHRoZW0gYXMgeW91ciBwYXJ0bmVyLiBUaGV5IHdpbGwgYmUgdGhlcmUgZm9yIHlvdSBlYWNoIHRpbWUgeW91IG5lZWQgdGhlbS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlc2UgZ3V5cyBhcmUgcXVpY2sgdG8gZmFsbCwgd2lsbCBmb3JnaXZlIGVhc2lseSwgY2FyZSBmb3Igc29tZW9uZSBsaWtlIGFueXRoaW5nIGJ1dCBkZWZpbml0ZWx5IHRoaXMgcypja3MgYXQgdGltZXMuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZ1bm55ICAgICBidXQgYXQgdGltZXMgYSBMaWJyYSB3aWxsIGJlY29tZSB0aGVpciBvd24gd29yc3QgZW5lbXkuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIllvdSBkb27igJl0IGhhdmUgYSBsb2dpYyB0byBzdXBwb3J0IHlvdXIgY29udmVyc2F0aW9uLCBzb3JyeSB0aGVzZSBndXlzIGhhdmUgbm8gdGltZSBmb3Igc3VjaCB1c2VsZXNzIHRhbGtzLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGV5IGFyZSBiYWQgYXQgbWFraW5nIGRlY2lzaW9ucywgdGhlaXIgbWluZHMgZmx1Y3R1YXRlIGxpa2UgYSBzd2l0Y2guXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvem9kaWFjL3pvZGlhY18zMS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIG5hbWU6IFwiU2NvcnBpb1wiLFxuICAgICAgICAgICAgZmFjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QxOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaW1wbHkgYmUgdHJhbnNwYXJlbnQsIGRvbuKAmXQgaGlkZSB0aGluZ3MgYW5kIHNwZWFrIHRoZSB0cnV0aCwgdGhpcyB3aGF0IGEgU2NvcnBpbyBsb29rcyBmb3IgaW4gdGhlaXIgbG92ZSBwYXJ0bmVyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVzZSBndXlzIGFyZSB0b28gaGFyZCB0byBiZSBwcmVkaWN0ZWQuIFlvdSBjYW7igJl0IHJlYWQgdGhlaXIgZmFjZSB0byB0ZWxsIGFib3V0IHRoZWlyIHF1YWxpdGllcy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVHJ5IHRoZXNlIGZlbGxhcyBvbmx5IGlmIHlvdSBhcmUgcmVhZHkgZm9yIGEgY29tbWl0bWVudCwgZWxzZSBiZXR0ZXIga2VlcCB0aGF0IGRpc3RhbmNlLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q0OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEb27igJl0IGV2ZW4gdGhpbmsgYWJvdXQgZipja2luZyB3aXRoIHRoZW0sIHRoZXkgYXJlIGxpa2UgdGhlIHR3byBlbmRzIG9mIGEgc3RyaW5nLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEb27igJl0IGJvdGhlciB0byBwbGF5IGEgcXVlc3Rpb24gaG91ciB3aXRoIHRoZXNlIHBlb3BsZSwgdGhleSBhcmUgbGVhc3QgaW50ZXJlc3RlZC5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy96b2RpYWMvem9kaWFjXzMzLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgbmFtZTogXCJTYWdpdHRhcml1c1wiLFxuICAgICAgICAgICAgZmFjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QxOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUcnlpbmcgICAgIHRvIHRhbWUgYSBTYWdpdHRhcmlhbiwgbm90IHdvcnRoIHRoZSBlZmZvcnRzLCB0aGV5IGxvdmUgdG8gYmUgc2V0IGZyZWUuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRvbuKAmXQgYmUgYXN0b25pc2hlZCB0byBjaGVjayB0aGVpciByZXNlcnZlcyBvZiBtZW1vcmllcy4gVGhleSBjYW4gcmVsYXRlIHRvIHNvbWV0aGluZyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgYWdlcyBhZ28uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXkgYXJlIGhvbmVzdCBhbmQgaGF0ZSB0aG9zZSBzdWdhci1jb2F0ZWQgYW5kIHN3ZWV0IHRhbGtzLiBCZXR0ZXIgYmUgc3RyYWlnaHRmb3J3YXJkIHdpdGggdGhlbS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2FnaXR0YXJpYW5zIGNhbiBiZSBmcmVha3MsIGNyYXp5LCB3aWxkIG9uIG9uZSBoYW5kIGFuZCBvbiB0aGUgb3RoZXIgbWFpbnRhaW4gdGhlaXIgdHJhZGl0aW9uLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaG9ydC10ZW1wZXJlZCBidXQgdGhlIGJlc3QgcGFydCB0aGVpciBhbmdlciB2YW5pc2hlcyB3aXRoaW4gc2Vjb25kcy5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy96b2RpYWMvem9kaWFjXzM1LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgIG5hbWU6IFwiQ2Fwcmljb3JuXCIsXG4gICAgICAgICAgICBmYWN0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdSBhcmUgYW4gYXR0ZW50aW9uIHNlZWtlciwgZXhwZWN0IG5vdGhpbmcgZnJvbSBDYXByaWNvcm5zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgbWlnaHQgbm90IGxpa2UgdGhlaXIgaG9uZXN0eS4gVGhleSB3aWxsIGNvb2sgdXAgY29udmVyc2F0aW9uIGluIGEgZnVubnkgbWFubmVyIHRvIHNwZWFrIG91dCB0aGUgdHJ1dGguXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1lc3NlZCB1cCB3aXRoIGEgQ2Fwcmljb3JuLCB3YXRjaCBvdXQgZm9yIHRoZSBoYXJkIHRpbWUgY29taW5nIHlvdXIgd2F5LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q0OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGV5IGNhbiBiZSB0aGUgZnVubmllc3QgcGVvcGxlIHRvIGhhbmcgb3V0IHdpdGggaW4gYSBwYXJ0eS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0NTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWxsb3cgdGhlbSB0byBhbWF6ZSB5b3UgYW5kIHlvdSB3aWxsIGdldCBhIGNyYXp5IENhcHJpY29ybiBpbiB0dXJuLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3pvZGlhYy96b2RpYWNfMDEucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgbmFtZTogXCJBcXVhcml1c1wiLFxuICAgICAgICAgICAgZmFjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QxOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGV5IGRvbuKAmXQgZ2l2ZSBhIGRhbW4gYWJvdXQgd2hhdCBwZW9wbGUgdGhpbmsgb2YgdGhlbTsgdGhleSB3aWxsIHByZXNlbnQgdGhlbXNlbHZlcyB0aGUgd2F5IHRoZXkgd2FudCB0by5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCB0aGV5IG5lZWQgdGltZSBmb3IgdGhlbXNlbHZlcyB0byB0aGluayAgICAgb3ZlciB0aGVpciBhY3Rpb25zIGNhcnJpZWQgb3V0IGluIHRoZSBkYVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3QzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEb27igJl0IGNhbGwgZm9yIHByb2JsZW1zIGJ5IGp1ZGdpbmcgYW4gQXF1YXJpdXMgYmVmb3JlIHlvdSBhY3R1YWxseSBrbm93IGFib3V0IHRoZW0uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRvbuKAmXQgZXZlbiB0aGluayBvZiBjb250cm9sbGluZyB0aGVtLCB0aGV5IHdpbGwgYnJlYWsgYWxsIHJ1bGVzIHRvIG1ha2UgeW91IHVuZGVyc3RhbmQgd2hlcmUgeW91IHN0YW5kLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZhY3Q1OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJZiB5b3UgbGlrZSBiZWluZyByb3VnaCBpbiB0aGUgYmVkcm9vbSwgeW91IHdpbGwgbG92ZSB0byBiZSBhY2NvbXBhbmllZCBieSBhbiBBcXVhcml1cyBwYXJ0bmVyLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3pvZGlhYy96b2RpYWNfMDMucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgbmFtZTogXCJQaXNjZXNcIixcbiAgICAgICAgICAgIGZhY3RzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhleSBtaWdodCBmb3JnZXQgd2hhdCB0aGV5IHdvcmUgeWVzdGVyZGF5IGJ1dCB3aWxsIG5ldmVyIGZvcmdldCB3aGF0IHlvdSAgICAgZGlkIHdpdGggdGhlbSBhZ2VzIGFnby5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91IHdpbGwgZmluZCB0aGVtIGZ1bm55LCBiZWxpZXZlIGl0LCB0aGF0IGlzIHRoZWlyIHNlY3JldCB3ZWFwb24uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXkgZG9u4oCZdCBoYXZlIHRoZSB0aW1lIG9yIGV2ZW4gYm90aGVyIHRvIGFyZ3VlIHdpdGggeW91LCB0aGV5IHByZWZlciBiZWluZyBzaWxlbnQgYW5kIGxldCB5b3UgdGhpbmsgd2hhdCB5b3Ugd2lzaCB0by5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWN0NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhleSB3aWxsIHN0YW5kIGJ5IHlvdXIgc2lkZSBmb3IgbGlmZXRpbWUgaWYgeW91IGFyZSBhYmxlIHRvIHdpbiB0aGVpciAgICAgdHJ1c3QgYW5kIGZyaWVuZHNoaXAuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjdDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXkgYXJlIGdvb2QgYXQganVkZ2luZyBwZW9wbGUgYW5kIHdpdGggdGltZSwgY2FuIG1ha2Ugb3V0IHlvdXIgd2Vha25lc3MuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvem9kaWFjL3pvZGlhY18wNS5wbmdcIlxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19