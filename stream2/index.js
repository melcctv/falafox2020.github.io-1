const _0xa0c2a0=_0x2b25;(function(_0x3b5056,_0xa71317){const _0x2b03e2=_0x2b25,_0x3f7d08=_0x3b5056();while(!![]){try{const _0x145e14=-parseInt(_0x2b03e2(0x222))/0x1+parseInt(_0x2b03e2(0x277))/0x2+parseInt(_0x2b03e2(0x264))/0x3*(parseInt(_0x2b03e2(0x2a8))/0x4)+parseInt(_0x2b03e2(0x256))/0x5*(-parseInt(_0x2b03e2(0x27d))/0x6)+-parseInt(_0x2b03e2(0x1fc))/0x7*(parseInt(_0x2b03e2(0x215))/0x8)+parseInt(_0x2b03e2(0x22b))/0x9+parseInt(_0x2b03e2(0x1f3))/0xa*(parseInt(_0x2b03e2(0x212))/0xb);if(_0x145e14===_0xa71317)break;else _0x3f7d08['push'](_0x3f7d08['shift']());}catch(_0x3fda5a){_0x3f7d08['push'](_0x3f7d08['shift']());}}}(_0x28dc,0x6e633));import{Options,BaseURL,NowPlayingEndpoint,TrendingEndpoint,TopratedEndpoint,PopularEndpoint,Poster,QS,AddElement,convertMinsToHrsMins,convertYear,convertWholeNumber,IconCalendar,IconClock,IconStar,fallbackMoviePoster}from'./api/movieapi.js';const SearchDiv=AddElement(_0xa0c2a0(0x27c));SearchDiv[_0xa0c2a0(0x21f)]=_0xa0c2a0(0x20f),SearchDiv['innerHTML']=_0xa0c2a0(0x243)+_0xa0c2a0(0x265)+_0xa0c2a0(0x24b)+_0xa0c2a0(0x226)+_0xa0c2a0(0x288)+_0xa0c2a0(0x2a5)+'\x0a',QS(_0xa0c2a0(0x24e))[_0xa0c2a0(0x224)](SearchDiv);const TrendingDiv=AddElement(_0xa0c2a0(0x27c));TrendingDiv[_0xa0c2a0(0x220)]='\x0a<h3\x20class=\x22div-labe'+_0xa0c2a0(0x23a)+_0xa0c2a0(0x239)+'s=\x22movie-group\x22></di'+_0xa0c2a0(0x229),QS(_0xa0c2a0(0x28d))[_0xa0c2a0(0x27b)](TrendingDiv);const NowplayingDiv=AddElement(_0xa0c2a0(0x27c));NowplayingDiv[_0xa0c2a0(0x220)]='\x0a<h3\x20class=\x22div-labe'+_0xa0c2a0(0x21c)+'<div\x20id=\x22nowplaying\x22'+_0xa0c2a0(0x20a)+_0xa0c2a0(0x22e),QS(_0xa0c2a0(0x28d))[_0xa0c2a0(0x27b)](NowplayingDiv);const TopratedDiv=AddElement(_0xa0c2a0(0x27c));function _0x28dc(){const _0x5e8f7a=['e-stats-group\x22>','roup\x22>','me\x20src=\x22https://vids','fullscreen></iframe>','re;\x20web-share\x22\x20allow','ube.com/embed/','4147530AddkfB','/recommendations?lan','\x0a<h3\x20class=\x22div-labe','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button','#closeTrailerModal','TrailerModal','iv>\x0a','runtime','guage=en-US&page=1','class=\x22movie-stats-g','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<bu','\x20class=\x22selected-pos','#search-results','title','3kYRZNt','ovies</h3>\x0a\x20\x20\x20\x20<butt','es\x22>Genres:\x20','/search/movie?query=','oseModal\x22>Close</but','movie/','iv>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<img\x20src=\x22','#search-movie-btn','then','\x22movie-group\x22></div>','-details-text\x22>\x0a\x20\x20\x20\x20','\x20<div\x20id=\x22search-res','er=\x220\x22\x20allow=\x22accele','\x20type=\x22button\x22\x20class','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20','s=\x22modal-btn-group\x22>','json','ter\x22\x20/><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','1298752KLQgOE','v>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','iv\x20id=\x22toprated\x22\x20cla','\x22\x20class=\x22posters\x22\x20/>','appendChild','div','6IzfloZ','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','lowfullscreen></ifra','\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<','=\x22movie-details\x22>\x0a\x0a\x20','#TrailerModal','lipboard-write;\x20encr','name','railerModal\x22\x20class=\x22','auto','lass=\x22btn\x20primary\x22>S','\x20id=\x22popular\x22\x20class=','#trailerBtn','btn\x20primary\x22>Close</','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20','#root','#closePlayMovierModa','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20','catch','e-btn\x22>Search</butto','\x22\x20class=\x22btn\x20primary','l\x22>Popular</h3>\x0a<div','s=\x22btn\x20primary\x22\x20id=\x22','#trending','\x22\x20frameborder=\x220\x22\x20al','hidden','n\x20type=\x22button\x22\x20clas','pe;\x20picture-in-pictu','ypted-media;\x20gyrosco','#closeSearchModal','\x20|\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20s','</p>\x20<small>','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20c','click','#toprated','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<butto','\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','earch\x20movie</button>','removeChild','play-movie-modal','1917184PVRomS','addEventListener','\x20<div><p>','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ifra','poster_path','lass=\x22sypnosis\x22>','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','=\x22movie-stats\x22>\x0a\x20\x20\x20\x20','ss=\x22movie-group\x22></d','6280ERbbkZ','l-btn-group\x22>\x0a\x20\x20\x20\x20\x20\x20','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20','key','&language=en-US&page','\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','results','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</d','42yRBZrj','\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>','tn\x20secondary\x22\x20id=\x22cl','overflow','d=\x22query\x22\x20placeholde','length','closePlayMovierModal','\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type','Trailer','n=http://youtube.com','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class','ss=\x22movie-title\x22>','ll\x20class=\x22movie-genr','</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20class=\x22movie-group\x22','rc=\x22https://www.yout','?enablejsapi=1&origi','release_date','<input\x20type=\x22text\x22\x20i','header','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20ty','\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','11968UgvMkk','ton>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x20\x20<div\x20class=\x22movie','640488CYFbMl','style','l\x22>Close</button>\x0a\x20\x20','\x20\x20\x20\x20\x20\x20<label>Search<','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div','vote_average','button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','l\x22>Most\x20played</h3>\x0a','\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x20\x20\x20<div\x20class=\x22movi','className','innerHTML','.modal','816749ystMBR','\x22trailerBtn\x22>Trailer','prepend','db.org/3/movie/','\x22search-movie-btn\x22\x20c','\x20\x20\x20','n>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<','v>\x0a','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20clas','6901488APgbqR','pe=\x22button\x22\x20class=\x22b','type','></div>\x0a','#similar','#popular','#playMovieBtn','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=','overview','#nowplaying','s-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','modal','?language=en-US','</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','v\x20id=\x22trending\x22\x20clas','l\x22>Trending</h3>\x0a<di','\x20id=\x22closeSearchModa','lass=\x22btn\x20primary\x22\x20i','\x20Official\x20Trailer</h','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','tton\x20type=\x22button\x22\x20c','\x20class=\x22btn\x20primary\x22','#closeModal','log','\x0a\x20\x20\x20\x20<h3>LaZyDev\x27s\x20M','n\x20type=\x22button\x22\x20id=\x22','lastChild','/label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','=\x22button\x22\x20id=\x22closeT','genres','class=\x22movie-group\x22>','rometer;\x20autoplay;\x20c','on\x20type=\x22button\x22\x20id=','value','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','body','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'];_0x28dc=function(){return _0x5e8f7a;};return _0x28dc();}TopratedDiv[_0xa0c2a0(0x220)]=_0xa0c2a0(0x258)+'l\x22>Top\x20rated</h3>\x0a<d'+_0xa0c2a0(0x279)+_0xa0c2a0(0x1f2)+_0xa0c2a0(0x25c),QS(_0xa0c2a0(0x28d))['appendChild'](TopratedDiv);const PopularDiv=AddElement('div');PopularDiv['innerHTML']=_0xa0c2a0(0x258)+_0xa0c2a0(0x293)+_0xa0c2a0(0x289)+_0xa0c2a0(0x26e)+'\x0a',QS(_0xa0c2a0(0x28d))[_0xa0c2a0(0x27b)](PopularDiv);async function FetchTrending(){const _0x468402=_0xa0c2a0,_0x2062a7=await fetch(TrendingEndpoint,Options),_0x539596=_0x2062a7[_0x468402(0x275)]();return _0x539596;}FetchTrending()[_0xa0c2a0(0x26d)](_0x474615=>_0x474615[_0xa0c2a0(0x1fa)])[_0xa0c2a0(0x26d)](_0x57c6c2=>{const _0x5e280e=_0xa0c2a0;for(let _0x123d4f=0x0;_0x123d4f<_0x57c6c2[_0x5e280e(0x201)];_0x123d4f++){RenderMovieCover(_0x57c6c2[_0x123d4f]['id'],Poster+_0x57c6c2[_0x123d4f][_0x5e280e(0x1ee)],_0x5e280e(0x295));}})[_0xa0c2a0(0x290)](_0x4dd122=>console[_0xa0c2a0(0x242)](_0x4dd122));async function FetchNowplaying(){const _0x2a8302=await fetch(NowPlayingEndpoint,Options),_0x44b368=_0x2a8302['json']();return _0x44b368;}FetchNowplaying()[_0xa0c2a0(0x26d)](_0x4737a2=>_0x4737a2[_0xa0c2a0(0x1fa)])[_0xa0c2a0(0x26d)](_0x57ca87=>{const _0x535e78=_0xa0c2a0;for(let _0x52ec0a=0x0;_0x52ec0a<_0x57ca87[_0x535e78(0x201)];_0x52ec0a++){RenderMovieCover(_0x57ca87[_0x52ec0a]['id'],Poster+_0x57ca87[_0x52ec0a][_0x535e78(0x1ee)],_0x535e78(0x234));}})[_0xa0c2a0(0x290)](_0x2510a2=>console[_0xa0c2a0(0x242)](_0x2510a2));async function FetchToprated(){const _0x63f72=_0xa0c2a0,_0x39f60d=await fetch(TopratedEndpoint,Options),_0x47e542=_0x39f60d[_0x63f72(0x275)]();return _0x47e542;}FetchToprated()[_0xa0c2a0(0x26d)](_0xd9634d=>_0xd9634d[_0xa0c2a0(0x1fa)])['then'](_0x1f9654=>{const _0x4549e8=_0xa0c2a0;for(let _0x43986a=0x0;_0x43986a<_0x1f9654[_0x4549e8(0x201)];_0x43986a++){RenderMovieCover(_0x1f9654[_0x43986a]['id'],Poster+_0x1f9654[_0x43986a][_0x4549e8(0x1ee)],_0x4549e8(0x2a1));}})[_0xa0c2a0(0x290)](_0x1b2af3=>console[_0xa0c2a0(0x242)](_0x1b2af3));async function FetchPopular(){const _0x262a4e=_0xa0c2a0,_0x52f9a8=await fetch(PopularEndpoint,Options),_0x101333=_0x52f9a8[_0x262a4e(0x275)]();return _0x101333;}function _0x2b25(_0x438be6,_0x593219){const _0x28dc05=_0x28dc();return _0x2b25=function(_0x2b25c5,_0x3a9ff8){_0x2b25c5=_0x2b25c5-0x1ec;let _0x41b93f=_0x28dc05[_0x2b25c5];return _0x41b93f;},_0x2b25(_0x438be6,_0x593219);}FetchPopular()[_0xa0c2a0(0x26d)](_0x1fee33=>_0x1fee33[_0xa0c2a0(0x1fa)])[_0xa0c2a0(0x26d)](_0x30fd28=>{const _0x501238=_0xa0c2a0;for(let _0x35b17=0x0;_0x35b17<_0x30fd28[_0x501238(0x201)];_0x35b17++){RenderMovieCover(_0x30fd28[_0x35b17]['id'],Poster+_0x30fd28[_0x35b17][_0x501238(0x1ee)],_0x501238(0x230));}})[_0xa0c2a0(0x290)](_0x10a83d=>console[_0xa0c2a0(0x242)](_0x10a83d));function RenderMovieCover(_0x2cf663,_0x1d4b01,_0x3ee017){const _0x5bfe9b=_0xa0c2a0,_0x215e0c=AddElement(_0x5bfe9b(0x27c));_0x215e0c[_0x5bfe9b(0x220)]=_0x5bfe9b(0x26b)+_0x1d4b01+_0x5bfe9b(0x27a),_0x215e0c[_0x5bfe9b(0x2a9)](_0x5bfe9b(0x2a0),()=>{const _0x5dd9fb=_0x5bfe9b;QS('body')[_0x5dd9fb(0x216)][_0x5dd9fb(0x1ff)]=_0x5dd9fb(0x297),FetchSelectedMovie(_0x2cf663)[_0x5dd9fb(0x26d)](_0x4005fb=>{const _0x486314=_0x5dd9fb;QS('.modal')&&QS(_0x486314(0x24e))['removeChild'](QS(_0x486314(0x24e))['lastChild']);const _0x6fd48b=AddElement(_0x486314(0x27c));_0x6fd48b[_0x486314(0x21f)]='modal',_0x6fd48b[_0x486314(0x220)]=_0x486314(0x28c)+_0x486314(0x206)+_0x486314(0x282)+_0x486314(0x281)+'div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x486314(0x280)+(Poster+_0x4005fb[_0x486314(0x1ee)])+(_0x486314(0x261)+_0x486314(0x276)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<sma'+_0x486314(0x208)+_0x486314(0x266))+_0x4005fb[_0x486314(0x248)][0x0][_0x486314(0x285)]+',\x20'+_0x4005fb['genres'][0x1][_0x486314(0x285)]+(_0x486314(0x209)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20'+_0x486314(0x219)+'\x20class=\x22movie-detail'+_0x486314(0x235)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20cla'+_0x486314(0x207))+_0x4005fb[_0x486314(0x263)]+(_0x486314(0x1f5)+_0x486314(0x206)+_0x486314(0x1f1)+_0x486314(0x1f0)+_0x486314(0x21e)+_0x486314(0x250))+IconCalendar+convertYear(_0x4005fb[_0x486314(0x20d)])+(_0x486314(0x27e)+_0x486314(0x1f6)+_0x486314(0x25f)+_0x486314(0x251))+IconClock+convertMinsToHrsMins(_0x4005fb[_0x486314(0x25d)])+(_0x486314(0x27e)+_0x486314(0x1f6)+_0x486314(0x25f)+_0x486314(0x251))+IconStar+convertWholeNumber(_0x4005fb[_0x486314(0x21a)])+('</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x486314(0x273)+_0x486314(0x1fb)+_0x486314(0x26a)+_0x486314(0x27e)+_0x486314(0x214)+_0x486314(0x26f)+_0x486314(0x29f)+_0x486314(0x1ef))+_0x4005fb[_0x486314(0x233)]+('</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x486314(0x21d)+'\x20\x20\x20\x20<div\x20class=\x22moda'+_0x486314(0x1f4)+_0x486314(0x2a2)+_0x486314(0x298)+_0x486314(0x294)+'playMovieBtn\x22>Watch\x20'+'now</button>\x0a\x20\x20\x20\x20\x20\x20\x20'+_0x486314(0x259)+_0x486314(0x272)+'=\x22btn\x20secondary\x22\x20id='+_0x486314(0x223)+_0x486314(0x238)+_0x486314(0x210)+_0x486314(0x22c)+_0x486314(0x1fe)+_0x486314(0x268)+_0x486314(0x213)+_0x486314(0x1f9)+'\x20'),QS('body')[_0x486314(0x27b)](_0x6fd48b);const _0x27f179=QS(_0x486314(0x231));_0x27f179[_0x486314(0x2a9)](_0x486314(0x2a0),()=>{const _0x6a942e=_0x486314,_0x14dcbd=AddElement(_0x6a942e(0x27c));_0x14dcbd['className']=_0x6a942e(0x236),_0x14dcbd['id']=_0x6a942e(0x2a7),_0x14dcbd[_0x6a942e(0x220)]=_0x6a942e(0x2a4)+_0x6a942e(0x1ec)+_0x4005fb['title']+_0x6a942e(0x29e)+convertYear(_0x4005fb[_0x6a942e(0x20d)])+_0x6a942e(0x29c)+convertMinsToHrsMins(_0x4005fb[_0x6a942e(0x25d)])+_0x6a942e(0x29c)+_0x4005fb[_0x6a942e(0x248)][0x0][_0x6a942e(0x285)]+',\x20'+_0x4005fb[_0x6a942e(0x248)][0x1][_0x6a942e(0x285)]+('</small></div>\x0a\x20\x20\x20\x20\x20'+_0x6a942e(0x1ed)+_0x6a942e(0x252)+'rc.to/embed/movie/')+_0x2cf663+(_0x6a942e(0x296)+_0x6a942e(0x27f)+'me>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x6a942e(0x211)+_0x6a942e(0x2a2)+_0x6a942e(0x244)+_0x6a942e(0x202)+_0x6a942e(0x292)+'\x22>Close</button>\x0a\x20\x20\x20'+_0x6a942e(0x1fb)+_0x6a942e(0x26a)),QS('body')[_0x6a942e(0x27b)](_0x14dcbd);const _0x1a0526=QS(_0x6a942e(0x28e)+'l');_0x1a0526[_0x6a942e(0x2a9)](_0x6a942e(0x2a0),()=>{const _0x48e123=_0x6a942e;QS(_0x48e123(0x221))&&QS(_0x48e123(0x24e))[_0x48e123(0x2a6)](QS('body')[_0x48e123(0x245)]);});});const _0x53c336=QS(_0x486314(0x28a));_0x53c336[_0x486314(0x2a9)]('click',()=>{const _0x850ad0=_0x486314;FetchTrailer(_0x2cf663)['then'](_0x58eef7=>_0x58eef7[_0x850ad0(0x1fa)])[_0x850ad0(0x26d)](_0x2dec63=>{const _0x588873=_0x850ad0;if(_0x2dec63[_0x588873(0x201)]>0x0){const _0x56ada1=AddElement('div');_0x56ada1['id']=_0x588873(0x25b),_0x56ada1['className']=_0x588873(0x236),QS('body')[_0x588873(0x27b)](_0x56ada1);}for(let _0x435fcc=0x0;_0x435fcc<_0x2dec63[_0x588873(0x201)];_0x435fcc++){if(_0x2dec63[_0x435fcc][_0x588873(0x22d)]==_0x588873(0x204)){const _0x494e59=AddElement(_0x588873(0x27c));_0x494e59[_0x588873(0x21f)]='trailer-video',_0x494e59[_0x588873(0x220)]=_0x588873(0x2a4)+_0x588873(0x1fd)+_0x4005fb[_0x588873(0x263)]+(_0x588873(0x23d)+'3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x588873(0x29d)+_0x588873(0x20b)+_0x588873(0x255))+_0x2dec63[_0x435fcc][_0x588873(0x1f7)]+(_0x588873(0x20c)+_0x588873(0x205)+'\x22\x20title=\x22YouTube\x20vid'+'eo\x20player\x22\x20framebord'+_0x588873(0x271)+_0x588873(0x24a)+_0x588873(0x284)+_0x588873(0x29a)+_0x588873(0x299)+_0x588873(0x254)+_0x588873(0x253)+_0x588873(0x24d)+_0x588873(0x28f)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x588873(0x203)+_0x588873(0x247)+_0x588873(0x286)+_0x588873(0x28b)+_0x588873(0x21b)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</di'+_0x588873(0x278)+_0x588873(0x23e)),QS(_0x588873(0x283))['appendChild'](_0x494e59);const _0xcb3196=QS(_0x588873(0x25a));_0xcb3196['addEventListener'](_0x588873(0x2a0),()=>{const _0x23d405=_0x588873;QS(_0x23d405(0x221))&&QS('body')['removeChild'](QS(_0x23d405(0x24e))[_0x23d405(0x245)]);});break;}}});});const _0x32400a=QS(_0x486314(0x241));_0x32400a[_0x486314(0x2a9)]('click',()=>{const _0x447787=_0x486314;QS(_0x447787(0x221))&&(QS(_0x447787(0x24e))[_0x447787(0x2a6)](QS('body')[_0x447787(0x245)]),QS(_0x447787(0x24e))[_0x447787(0x216)][_0x447787(0x1ff)]='auto');}),FetchRecommendationMovie(_0x2cf663)['then'](_0x2a0395=>_0x2a0395[_0x486314(0x1fa)])[_0x486314(0x26d)](_0x363fa1=>{const _0x2e4f44=_0x486314,_0x18f8db=AddElement(_0x2e4f44(0x27c));_0x18f8db['className']='similar-div',_0x18f8db[_0x2e4f44(0x220)]=_0x2e4f44(0x2a4)+'\x20<h4>Suggestions</h4'+_0x2e4f44(0x24f)+'\x20\x20<div\x20id=\x22similar\x22\x20'+_0x2e4f44(0x249)+_0x2e4f44(0x27e)+_0x2e4f44(0x227);if(_0x363fa1['length']>0x0)for(let _0x3291f5=0x0;_0x3291f5<_0x363fa1[_0x2e4f44(0x201)];_0x3291f5++){_0x363fa1[_0x2e4f44(0x1ee)]!=''?setTimeout(()=>{const _0xeb6218=_0x2e4f44;RenderMovieCover(_0x363fa1[_0x3291f5]['id'],Poster+_0x363fa1[_0x3291f5][_0xeb6218(0x1ee)],'#similar');},0x1f4):setTimeout(()=>{const _0x3b6444=_0x2e4f44;RenderMovieCover(_0x363fa1[_0x3291f5]['id'],fallbackMoviePoster,_0x3b6444(0x22f));},0x1f4);}else setTimeout(()=>{RenderMovieCover(0x0,fallbackMoviePoster,'#similar');},0x1f4);QS('.modal')[_0x2e4f44(0x27b)](_0x18f8db);})[_0x486314(0x290)](_0x1b64c7=>console[_0x486314(0x242)](_0x1b64c7));})[_0x5dd9fb(0x290)](_0x11dfae=>console[_0x5dd9fb(0x242)](_0x11dfae));}),QS(_0x3ee017)[_0x5bfe9b(0x27b)](_0x215e0c);}async function FetchSelectedMovie(_0x4cff1d){const _0x131758=_0xa0c2a0,_0x1629a8=await fetch(BaseURL+_0x131758(0x269)+_0x4cff1d+_0x131758(0x237),Options),_0x2018bb=_0x1629a8[_0x131758(0x275)]();return _0x2018bb;}async function FetchRecommendationMovie(_0x269bf8){const _0x5d49c1=_0xa0c2a0,_0x3458d4=await fetch(BaseURL+_0x5d49c1(0x269)+_0x269bf8+(_0x5d49c1(0x257)+_0x5d49c1(0x25e)),Options),_0x216ec3=_0x3458d4['json']();return _0x216ec3;}async function FetchTrailer(_0x23fb4e){const _0x2a1514=_0xa0c2a0,_0x2df477=await fetch('https://api.themovie'+_0x2a1514(0x225)+_0x23fb4e+('/videos?language=en-'+'US'),Options),_0x379344=_0x2df477[_0x2a1514(0x275)]();return _0x379344;}const SearchMovies=QS(_0xa0c2a0(0x26c));SearchMovies[_0xa0c2a0(0x2a9)](_0xa0c2a0(0x2a0),()=>{const _0x1d5e25=_0xa0c2a0,_0x595fe2=AddElement('div');_0x595fe2[_0x1d5e25(0x21f)]=_0x1d5e25(0x236),_0x595fe2[_0x1d5e25(0x220)]=_0x1d5e25(0x232)+'\x22search-div\x22>\x0a\x20\x20\x20\x20\x20\x20'+_0x1d5e25(0x218)+_0x1d5e25(0x246)+_0x1d5e25(0x20e)+_0x1d5e25(0x200)+'r=\x22Movie\x20title\x22\x20/>\x0a\x20'+_0x1d5e25(0x22a)+_0x1d5e25(0x274)+_0x1d5e25(0x260)+_0x1d5e25(0x23f)+_0x1d5e25(0x23c)+'d=\x22search-movie-titl'+_0x1d5e25(0x291)+_0x1d5e25(0x228)+'button\x20type=\x22button\x22'+_0x1d5e25(0x240)+_0x1d5e25(0x23b)+_0x1d5e25(0x217)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20'+_0x1d5e25(0x2a3)+_0x1d5e25(0x270)+'ults\x22></div>\x0a\x20\x20\x20\x20',QS(_0x1d5e25(0x24e))[_0x1d5e25(0x27b)](_0x595fe2),QS('body')['style'][_0x1d5e25(0x1ff)]='hidden';const _0x2ea469=QS(_0x1d5e25(0x29b));_0x2ea469[_0x1d5e25(0x2a9)](_0x1d5e25(0x2a0),()=>{const _0xbf173e=_0x1d5e25;QS('.modal')&&(QS(_0xbf173e(0x24e))['removeChild'](QS('body')[_0xbf173e(0x245)]),QS('body')[_0xbf173e(0x216)]['overflow']=_0xbf173e(0x287));});const _0x4117db=QS('#search-movie-title-'+'btn');_0x4117db[_0x1d5e25(0x2a9)](_0x1d5e25(0x2a0),()=>{const _0x63cdeb=_0x1d5e25,_0x3831b2=QS('#query')[_0x63cdeb(0x24c)];FetchSearchMovies(_0x3831b2)[_0x63cdeb(0x26d)](_0x9fc80e=>_0x9fc80e[_0x63cdeb(0x1fa)])['then'](_0x1f90d8=>{const _0x5992ae=_0x63cdeb;console[_0x5992ae(0x242)](_0x1f90d8[_0x5992ae(0x201)]);for(let _0x1903d6=0x0;_0x1903d6<_0x1f90d8[_0x5992ae(0x201)];_0x1903d6++){RenderMovieCover(_0x1f90d8[_0x1903d6]['id'],Poster+_0x1f90d8[_0x1903d6]['poster_path'],_0x5992ae(0x262));}});});});async function FetchSearchMovies(_0x18beaf){const _0x1a3db9=_0xa0c2a0,_0x3c4c89=await fetch(BaseURL+_0x1a3db9(0x267)+_0x18beaf+('&include_adult=false'+_0x1a3db9(0x1f8)+'=1'),Options),_0x1799f7=_0x3c4c89[_0x1a3db9(0x275)]();return _0x1799f7;}