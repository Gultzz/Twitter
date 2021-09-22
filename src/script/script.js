var container = document.querySelector(".container");
async function Posts() {
    var link = await 'https://www.acefrontend.com/c/critter/feed.json';
    var API = await fetch(link).then(r => r.json()).then(API);

    for (post of API.feed) {
 
//TODO          Pegar infos API
        let name = post.user.username;
        let avatar = post.user.avatar;
        let text = post.text;
        let height = () => {
            if (text.length <= 150) {
                return 150;
            } else if (text.length > 150 && text.length <= 200) {
                return 200;
            } else if (text.length > 200 && text.length < 300) {
                return 400;
            } else {
                return 500;
            }
        }
        let likes = post.likes;

//TODO          Elemento DIV - posts
        let div = document.createElement('div');
        div.setAttribute('style', "box-shadow: 0 0 10px #888; width:500px; min-height:150px; height:"+height()+"px"+";margin:20px; color:white;");

//TODO          Elemento IMG - Avatar
        let img = document.createElement('img');
        img.src = avatar;
        img.setAttribute('style', 'cursor:pointer;position:absolute;width: 60px; height: 60px; border-radius: 50%; margin-left:15px; margin-top:15px;');
        div.appendChild(img);
        

//TODO          Elemento H3 - Username
        let h3 = document.createElement('h3');
        h3.innerHTML = `@${name}`;
        h3.setAttribute('style', "cursor:pointer;color:#000; margin-top:13px; margin-left:80px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;");
        div.appendChild(h3);
        
//TODO          Elemento P - Texto
        let p1 = document.createElement('p');
        p1.innerHTML = text;
        p1.setAttribute('style', "position:absolute;color:#444;margin:45px 10px 20px 90px; max-width:380px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;");
        div.appendChild(p1);
        
//TODO          Elemento P2 - Likes
        let p2 = document.createElement('p');
        p2.innerHTML = "Likes: <br>"+ likes;
        p2.setAttribute('style', "position:absolute;color:#444;margin:90px 0 20px 15px; max-width:75px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;");
        div.appendChild(p2);

        img.addEventListener('click', () => { 
                window.location.href = avatar;
        });
        div.addEventListener('mouseover', () => {
            div.style.boxShadow = '0 0 10px #555';
        });
        div.addEventListener('mouseout', () => {
            div.style.boxShadow = '0 0 10px #888';
        });
        container.appendChild(div);
    }
}
Posts();
