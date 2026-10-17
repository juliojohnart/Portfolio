/* Organic experiment: progressive enhancement only.
   Existing data, routing, image viewer, and navigation stay authoritative. */
(function(){
  const originalHome=home;
  const originalProject=project;
  function organicHome(){
    originalHome();
    const hero=app.querySelector(".hero");
    if(!hero)return;
    hero.classList.add("organic-hero");
    const title=hero.querySelector("h1");
    const paragraph=hero.querySelector("p");
    const links=hero.querySelector(".inline-links");
    const copy=document.createElement("div");
    copy.className="hero-copy";
    const eyebrow=document.createElement("div");
    eyebrow.className="hero-eyebrow";
    eyebrow.textContent="Independent thinking · Games & digital products";
    copy.append(eyebrow,title,paragraph,links);
    const art=document.createElement("div");
    art.className="hero-art";
    const cover=document.createElement("img");
    cover.className="art-landscape";
    cover.src="w/cover-twvc-635.webp";
    cover.alt="";
    cover.decoding="async";
    const ribbon=document.createElement("img");
    ribbon.className="art-ribbon";
    ribbon.src="organic/liquid-ribbon.svg";
    ribbon.alt="";
    ribbon.decoding="async";
    const label=document.createElement("span");
    label.className="art-caption";
    label.textContent="Fluid forms / precise interfaces";
    art.append(cover,ribbon,label);
    hero.append(copy,art);
  }
  home=organicHome;
  project=function(p){
    originalProject(p);
    app.classList.add("organic-case");
  };
  const previousRender=render;
  render=function(id){
    app.classList.remove("organic-case");
    previousRender(id);
  };
})();
