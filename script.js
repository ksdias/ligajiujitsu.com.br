const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const blackBeltsModal=document.getElementById('blackBeltsModal');
const blackBeltsOpenButtons=document.querySelectorAll('.black-belts-open');
const blackBeltsCloseTargets=document.querySelectorAll('[data-close-black-belts]');
function openBlackBelts(){
  if(!blackBeltsModal) return;
  blackBeltsModal.classList.add('is-open');
  blackBeltsModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeBlackBelts(){
  if(!blackBeltsModal) return;
  blackBeltsModal.classList.remove('is-open');
  blackBeltsModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
blackBeltsOpenButtons.forEach(button=>button.addEventListener('click',openBlackBelts));
blackBeltsCloseTargets.forEach(button=>button.addEventListener('click',closeBlackBelts));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && blackBeltsModal?.classList.contains('is-open')) closeBlackBelts();
});

const translations={
  pt:{
    brandSub:'ERIVALDO JUNIOR<br><small>OLD SCHOOL RULES</small>',
    navAcademy:'A academia',navTeachers:'Professores',navCommunity:'Comunidade',navBlackBelts:'Faixas pretas',navGallery:'Galeria',navCta:'Treine com a gente',
    heroEyebrow:'ERIVALDO JUNIOR • LIGA JJ',heroTitle:'Jiu-Jitsu com<br><em>tradição.</em>',
    heroCopy:'Disciplina, respeito, amizade e treino de verdade. Uma escola construída no tatame e fortalecida por cada pessoa que faz parte dela.',
    heroAcademyBtn:'Conheça a academia <span>↘</span>',heroTrainBtn:'Quero treinar',heroStamp:'OLD<br><span>SCHOOL</span><br>RULES',heroScroll:'SCROLL <span>↓</span>',
    academyKicker:'01 / A ACADEMIA',academyTitle:'Mais que<br><span>Jiu-Jitsu.</span>',academyLead:'Aqui, o treino começa muito antes do primeiro golpe e continua muito depois do último rola.',academyText:'A Liga JJ carrega uma filosofia simples: treinar sério, respeitar quem está ao lado e manter viva a essência do Jiu-Jitsu. É um ambiente de aprendizado, graduação, amizade e construção coletiva.',academyQuote:'“O tatame ensina aquilo que a vida cobra.”',
    photoCaptionSmall:'UMA EQUIPE.',photoCaptionBig:'MUITAS HISTÓRIAS.',
    essenceKicker:'02 / NOSSA ESSÊNCIA',pillar1Title:'Tradição',pillar1Text:'Respeito às raízes do Jiu-Jitsu e à experiência de quem veio antes.',pillar2Title:'Disciplina',pillar2Text:'Consistência no treino, atenção aos detalhes e compromisso com a evolução.',pillar3Title:'Comunidade',pillar3Text:'Um tatame onde faixas, idades e histórias diferentes treinam lado a lado.',pillar4Title:'Respeito',pillar4Text:'O parceiro de treino é parte do seu caminho. Crescemos juntos.',
    teachersKicker:'03 / QUEM ENSINA',teachersTitle:'Quem está<br><span>no tatame.</span>',teachersText:'O conhecimento passa de faixa em faixa. A experiência de quem ensina encontra a energia de quem está começando.',teacherCaptionBig:'Experiência',teacherCaptionSmall:'presença no tatame',
    communityKicker:'04 / COMUNIDADE',communityTitle:'Você não treina<br><span>sozinho.</span>',communityText:'São pessoas diferentes, objetivos diferentes e uma mesma vontade de evoluir. A força da Liga JJ está justamente nessa mistura.',stats1:'Tatame',stats2:'Histórias',stats3:'Família',
    blackBeltsKicker:'05 / FAIXAS PRETAS',blackBeltsTitle:'Uma história<br><span>faixa por faixa.</span>',blackBeltsIntro:'A faixa preta representa anos de treino, disciplina e dedicação ao Jiu-Jitsu. Cada nome abaixo carrega uma história construída dentro e fora do tatame.',blackBeltsCountLabel:'faixas pretas formados pela Liga JJ',blackBeltsButton:'Confira os faixas pretas <span>→</span>',
    cardTopLeft:'ERIVALDO JUNIOR • LIGA JJ',cardTopRight:'OLD SCHOOL RULES',cardKicker:'LISTA OFICIAL',cardTitle:'NOMES DOS FAIXAS PRETAS',cardText:'Clique no botão para consultar a relação completa dos faixas pretas formados pela Liga JJ.',cardButton:'Ver lista completa <span>→</span>',
    modalKicker:'05 / LISTA OFICIAL',modalTitle:'Faixas pretas<br><span>formados pela Liga JJ.</span>',modalMeta:'nomes registrados',
    galleryKicker:'06 / GALERIA',galleryTitle:'Momentos que<br><span>ficam.</span>',
    ctaKicker:'07 / VEM PARA O TATAME',ctaTitle:'Seu próximo capítulo<br>começa <span>aqui.</span>',ctaText:'Quer conhecer a Liga JJ? Fale com a gente e venha fazer uma aula.',whatsappBtn:'Falar pelo WhatsApp ↗',instagramBtn:'Instagram ↗',
    locationKicker:'08 / ONDE ESTAMOS',locationTitle:'Jd. Satélite,<br><span>São José dos Campos.</span>',addressText:'Rua Tijuca, 351<br>Jardim Satélite — São José dos Campos/SP',mapLink:'Abrir no mapa <span>→</span>',footerText:'© {year} Erivaldo Junior Liga JJ. Todos os direitos reservados.',footerTop:'Voltar ao topo ↑',
    locationTitleSJC:'Jd. Satélite,<br><span>São José dos Campos.</span>',addressSJC:'Rua Tijuca, 351<br>Jardim Satélite — São José dos Campos/SP',
    heroAlt:'Professor conduzindo um momento de aula na academia',photoBreakAlt:'Grande encontro da equipe no tatame',teacherMainAlt:'Momento de confraternização entre professores',teacherSide1Alt:'Professor durante uma graduação',teacherSide2Alt:'Equipe acompanhando a cerimônia',communityAlt:'Alunos reunidos no tatame',galleryAlt1:'Foto coletiva da Liga JJ',galleryAlt2:'Alunos acompanhando a aula',galleryAlt3:'Aluna durante a cerimônia',galleryAlt4:'Juninho com faixa preta Adaulete',galleryAlt5:'Moradora observando a atividade da janela',galleryAlt6:'Equipe reunida durante evento',galleryAlt7:'Aluno sorrindo durante a aula',galleryAlt8:'Professor conduzindo a turma',galleryAlt9:'Grande foto da equipe',ctaAlt:'Equipe reunida no tatame'
  },
  en:{
    brandSub:'ERIVALDO JUNIOR<br><small>OLD SCHOOL RULES</small>',
    navAcademy:'The academy',navTeachers:'Instructors',navCommunity:'Community',navBlackBelts:'Black belts',navGallery:'Gallery',navCta:'Train with us',
    heroEyebrow:'ERIVALDO JUNIOR • LIGA JJ',heroTitle:'Jiu-Jitsu with<br><em>tradition.</em>',
    heroCopy:'Discipline, respect, friendship and real training. A school built on the mat and strengthened by every person who is part of it.',
    heroAcademyBtn:'Discover the academy <span>↘</span>',heroTrainBtn:'I want to train',heroStamp:'OLD<br><span>SCHOOL</span><br>RULES',heroScroll:'SCROLL <span>↓</span>',
    academyKicker:'01 / THE ACADEMY',academyTitle:'More than<br><span>Jiu-Jitsu.</span>',academyLead:'Here, training starts long before the first technique and continues long after the last roll.',academyText:'Liga JJ follows a simple philosophy: train seriously, respect the people beside you and keep the essence of Jiu-Jitsu alive. It is a place for learning, promotions, friendship and building something together.',academyQuote:'“The mat teaches what life demands.”',
    photoCaptionSmall:'ONE TEAM.',photoCaptionBig:'MANY STORIES.',
    essenceKicker:'02 / OUR ESSENCE',pillar1Title:'Tradition',pillar1Text:'Respect for the roots of Jiu-Jitsu and for the experience of those who came before us.',pillar2Title:'Discipline',pillar2Text:'Consistency in training, attention to detail and commitment to growth.',pillar3Title:'Community',pillar3Text:'One mat where different belts, ages and stories train side by side.',pillar4Title:'Respect',pillar4Text:'Your training partner is part of your journey. We grow together.',
    teachersKicker:'03 / WHO TEACHES',teachersTitle:'Who is<br><span>on the mat.</span>',teachersText:'Knowledge passes from belt to belt. The experience of those who teach meets the energy of those who are just beginning.',teacherCaptionBig:'Experience',teacherCaptionSmall:'presence on the mat',
    communityKicker:'04 / COMMUNITY',communityTitle:'You do not train<br><span>alone.</span>',communityText:'Different people, different goals and the same desire to improve. Liga JJ is strong precisely because of this mix.',stats1:'Mat',stats2:'Stories',stats3:'Family',
    blackBeltsKicker:'05 / BLACK BELTS',blackBeltsTitle:'A story<br><span>belt by belt.</span>',blackBeltsIntro:'A black belt represents years of training, discipline and dedication to Jiu-Jitsu. Every name below carries a story built on and beyond the mat.',blackBeltsCountLabel:'black belts formed by Liga JJ',blackBeltsButton:'See the black belts <span>→</span>',
    cardTopLeft:'ERIVALDO JUNIOR • LIGA JJ',cardTopRight:'OLD SCHOOL RULES',cardKicker:'OFFICIAL LIST',cardTitle:'BLACK BELT NAMES',cardText:'Click the button to view the complete list of black belts formed by Liga JJ.',cardButton:'View full list <span>→</span>',
    modalKicker:'05 / OFFICIAL LIST',modalTitle:'Black belts<br><span>formed by Liga JJ.</span>',modalMeta:'registered names',
    galleryKicker:'06 / GALLERY',galleryTitle:'Moments that<br><span>stay.</span>',
    ctaKicker:'07 / COME TO THE MAT',ctaTitle:'Your next chapter<br>starts <span>here.</span>',ctaText:'Want to get to know Liga JJ? Talk to us and come try a class.',whatsappBtn:'Talk on WhatsApp ↗',instagramBtn:'Instagram ↗',
    locationKicker:'08 / WHERE WE ARE',locationTitle:'Jd. Satélite,<br><span>São José dos Campos.</span>',addressText:'Rua Tijuca, 351<br>Jardim Satélite — São José dos Campos/SP',mapLink:'Open in Maps <span>→</span>',footerText:'© {year} Erivaldo Junior Liga JJ. All rights reserved.',footerTop:'Back to top ↑',
    locationTitleSJC:'Jd. Satélite,<br><span>São José dos Campos.</span>',addressSJC:'Rua Tijuca, 351<br>Jardim Satélite — São José dos Campos/SP',
    heroAlt:'Instructor leading a training moment at the academy',photoBreakAlt:'Large team gathering on the mat',teacherMainAlt:'Teachers gathering together',teacherSide1Alt:'Instructor during a belt promotion',teacherSide2Alt:'Team following the ceremony',communityAlt:'Students gathered on the mat',galleryAlt1:'Liga JJ team photo',galleryAlt2:'Students watching the class',galleryAlt3:'Student during the ceremony',galleryAlt4:'Juninho with black belt Adaulete',galleryAlt5:'Resident watching the activity from a window',galleryAlt6:'Team gathered during an event',galleryAlt7:'Student smiling during class',galleryAlt8:'Instructor leading the class',galleryAlt9:'Large team photo',ctaAlt:'Team gathered on the mat'
  }
};

function applyLanguage(lang){
  const dict=translations[lang]||translations.pt;
  document.documentElement.lang=lang==='en'?'en':'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(!(key in dict)) return;
    const value=String(dict[key]).replace('{year}',new Date().getFullYear());
    if(el.dataset.i18nHtml==='true' || value.includes('<span') || value.includes('<br') || value.includes('<small') || value.includes('<em')) el.innerHTML=value;
    else el.textContent=value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(img=>{
    const key=img.dataset.i18nAlt;
    if(dict[key]) img.alt=dict[key];
  });
  document.querySelectorAll('.language-btn').forEach(btn=>{
    const active=btn.dataset.lang===lang;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  localStorage.setItem('ligaJJLanguage',lang);
}

document.querySelectorAll('.language-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    applyLanguage(btn.dataset.lang);
    nav?.classList.remove('open');
  });
});

const savedLanguage=localStorage.getItem('ligaJJLanguage');
applyLanguage(savedLanguage==='en'?'en':'pt');
