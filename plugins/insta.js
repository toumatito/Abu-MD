const Jsl_0x5bb0dc=Jsl_0x3ddf;function Jsl_0x3ddf(_0x3dba16,_0x7c0c10){const _0x4ec358=Jsl_0x4ec3();return Jsl_0x3ddf=function(_0x3ddfe4,_0x425119){_0x3ddfe4=_0x3ddfe4-0x1f2;let _0xb44f23=_0x4ec358[_0x3ddfe4];return _0xb44f23;},Jsl_0x3ddf(_0x3dba16,_0x7c0c10);}(function(_0x314f9c,_0x2b70f7){const _0x20ecc5=Jsl_0x3ddf,_0x4d632e=_0x314f9c();while(!![]){try{const _0x34a22b=parseInt(_0x20ecc5(0x213))/0x1+parseInt(_0x20ecc5(0x1fc))/0x2*(-parseInt(_0x20ecc5(0x207))/0x3)+parseInt(_0x20ecc5(0x218))/0x4*(parseInt(_0x20ecc5(0x215))/0x5)+-parseInt(_0x20ecc5(0x201))/0x6*(-parseInt(_0x20ecc5(0x20f))/0x7)+-parseInt(_0x20ecc5(0x1f3))/0x8+-parseInt(_0x20ecc5(0x1fe))/0x9+-parseInt(_0x20ecc5(0x1f7))/0xa*(-parseInt(_0x20ecc5(0x20b))/0xb);if(_0x34a22b===_0x2b70f7)break;else _0x4d632e['push'](_0x4d632e['shift']());}catch(_0x77ad9d){_0x4d632e['push'](_0x4d632e['shift']());}}}(Jsl_0x4ec3,0x33579));const {Module,getJson,isPublic}=require('../lib/'),{jslbuffer}=require('abu-bot'),IgDl=require(Jsl_0x5bb0dc(0x1f9));Module({'pattern':'https','fromMe':isPublic,'desc':Jsl_0x5bb0dc(0x203),'dontAddCommandList':!![],'type':'downloader'},async(_0x23f2f9,_0x3d269b)=>{const _0x119c6f=Jsl_0x5bb0dc;let _0x575a19=await IgDl(_0x3d269b);if(_0x575a19[_0x119c6f(0x209)]!=0xc8)return _0x23f2f9[_0x119c6f(0x1f6)](_0x119c6f(0x1f5));for(let _0x19e9cd of _0x575a19['result']){_0x23f2f9['sendFromUrl'](_0x19e9cd,{'quoted':_0x23f2f9});}}),Module({'pattern':'insta','fromMe':isPublic,'desc':Jsl_0x5bb0dc(0x203),'type':Jsl_0x5bb0dc(0x1fd)},async(_0x86756e,_0x37a1c1)=>{const _0x4546f8=Jsl_0x5bb0dc;_0x37a1c1=_0x37a1c1||_0x86756e[_0x4546f8(0x204)][_0x4546f8(0x20c)];if(!_0x37a1c1)return await _0x86756e[_0x4546f8(0x1f6)](_0x4546f8(0x202));if(!_0x37a1c1[_0x4546f8(0x1f4)](_0x4546f8(0x216)))return await _0x86756e['reply'](_0x4546f8(0x1fa));let _0x48df17=await IgDl(_0x37a1c1);if(_0x48df17[_0x4546f8(0x209)]!=0xc8)return _0x86756e[_0x4546f8(0x1f6)](_0x4546f8(0x1f5));for(let _0x1e7ee6 of _0x48df17[_0x4546f8(0x217)]){_0x86756e[_0x4546f8(0x210)](_0x1e7ee6,{'quoted':_0x86756e});}}),Module({'pattern':'story','fromMe':isPublic,'desc':'downloads\x20story\x20from\x20instagram','type':Jsl_0x5bb0dc(0x1fd)},async(_0x4b9ded,_0x78a412)=>{const _0x26280d=Jsl_0x5bb0dc;_0x78a412=_0x78a412||_0x4b9ded[_0x26280d(0x204)]['text'];if(!_0x78a412)return await _0x4b9ded['reply'](_0x26280d(0x1ff));let _0xf01c18=await IgDl(_0x26280d(0x1fb)+_0x78a412);if(_0xf01c18[_0x26280d(0x209)]!=0xc8)return _0x4b9ded[_0x26280d(0x1f6)](_0x26280d(0x20a));for(let _0x178420 of _0xf01c18['result']){_0x4b9ded[_0x26280d(0x210)](_0x178420,{'quoted':_0x4b9ded});}}),Module({'pattern':Jsl_0x5bb0dc(0x208),'fromMe':isPublic,'desc':Jsl_0x5bb0dc(0x1f8),'type':Jsl_0x5bb0dc(0x1fd)},async(_0x23c3cd,_0x42a42c)=>{const _0x433f01=Jsl_0x5bb0dc;_0x42a42c=_0x42a42c||_0x23c3cd[_0x433f01(0x204)][_0x433f01(0x20c)];if(!_0x42a42c)return await _0x23c3cd['reply'](_0x433f01(0x20e));var _0x127df6=await getJson('https://mfarels.my.id/api/openai?text='+_0x42a42c);await _0x23c3cd[_0x433f01(0x200)]['sendMessage'](_0x23c3cd[_0x433f01(0x1f2)],{'text':_0x127df6[_0x433f01(0x217)]},{'quoted':_0x23c3cd});});const logos=Jsl_0x5bb0dc(0x206),ttsss='https://i.imgur.com/ZnkdCpE.jpeg';Module({'pattern':'tts\x20?(.*)','fromMe':isPublic,'desc':'Convert\x20Text\x20To\x20Audio','type':Jsl_0x5bb0dc(0x219)},async(_0x7f9415,_0x2d4fc5)=>{const _0x3a91b2=Jsl_0x5bb0dc;_0x2d4fc5=_0x2d4fc5||_0x7f9415[_0x3a91b2(0x204)]['text'];if(!_0x2d4fc5)return await _0x7f9415['reply'](_0x3a91b2(0x20d));const _0x31bb9e=await jslbuffer(logos);let _0x4bf37e=await getJson(_0x3a91b2(0x205)+_0x2d4fc5);await _0x7f9415['client'][_0x3a91b2(0x212)](_0x7f9415['jid'],{'audio':{'url':_0x4bf37e[_0x3a91b2(0x217)]},'mimetype':_0x3a91b2(0x214),'ptt':!![],'waveform':[0x0,0x63,0x0,0x63,0x0,0x63,0x0],'contextInfo':{'externalAdReply':{'title':'ᴛᴇxᴛ\x20ᴄᴏɴᴠᴇʀᴛᴇʀ','body':'ᴠᴏɪᴄᴇ\x20:\x20▮▮▮▮▮▮▯▯▯','mediaType':0x1,'thumbnail':_0x31bb9e,'mediaUrl':'https://www.instagram.com/reel/安装它','sourceUrl':_0x3a91b2(0x211)}}},{'quoted':_0x7f9415});});function Jsl_0x4ec3(){const _0x364db3=['downloads\x20video\x20from\x20instagram','reply_message','https://api.akuari.my.id/texttovoice/texttosound_english?query=','https://i.imgur.com/MIJv3kT.jpeg','6bYssTF','gpt\x20?(.*)','status','_Download\x20failed!\x20Check\x20your\x20username\x20and\x20try\x20again_','470921ydVuRx','text','*_Need\x20Text_*','*Need\x20Text\x20!*','7McaGds','sendFromUrl','https://github.com/Afx-Abu/Abu-MD','sendMessage','10360ocVbYI','audio/mp4','55eHugdE','instagram.com','result','121456vFwsWt','misc','jid','15232TakcVB','includes','Not\x20Found','reply','10fuGbLG','Ai\x20Bot','../lib/scrapers','_Download\x20failed!\x20Check\x20your\x20link\x20and\x20try\x20again_','https://instagram.com/stories/','82514SgGwWI','downloader','953577knthRE','_Need\x20an\x20instagram\x20username!_*','client','80958zuwkPO','_Need\x20an\x20instagram\x20username\x20or\x20link!_'];Jsl_0x4ec3=function(){return _0x364db3;};return Jsl_0x4ec3();}
