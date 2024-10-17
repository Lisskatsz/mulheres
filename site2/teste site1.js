document.getElementById('mobile-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        document.getElementById('form-response').innerText = "Mensagem enviada com sucesso!";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerText = "Por favor, preencha todos os campos.";
    }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const indicators = document.querySelectorAll('.carousel-indicators span');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((indicator, i) => {
    if (i === currentSlide) indicator.classList.add('active');
    else indicator.classList.remove('active');
  });
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

function setSlide(index) {
  showSlide(index);
}

// Auto-slide a cada 3 segundos
setInterval(() => {
  moveSlide(1);
}, 3000);

function showInfo(info) {
    const modal = document.getElementById("infoModal");
    const modalContent = document.getElementById("modalContent");

    switch(info) {
        case 'info1':
            modalContent.innerHTML = "<h2>Dandara dos Palmares</h2><p>Dandara dos Palmares foi uma líder quilombola e esposa de Zumbi dos Palmares, desempenhando um papel vital na resistência contra a escravidão no Brasil colonial. Ela foi uma figura central na defesa do Quilombo dos Palmares, uma comunidade de escravizados fugitivos localizada na atual Alagoas, que resistiu bravamente às tropas coloniais portuguesas. Conhecida por sua coragem e habilidades de combate, Dandara organizou e liderou defesas contra os ataques coloniais. Sua determinação e liderança foram cruciais para a resistência quilombola, e seu legado a celebra como uma heroína da luta pela liberdade e pelos direitos dos negros no Brasil. Ela é lembrada como um ícone de resistência e sua memória é homenageada em várias iniciativas culturais e educacionais.</p>";
            modal.style.color="white"
            break;
        case 'info2':
            modalContent.innerHTML = "<h2>Maria Quitéria</h2><p>Maria Quitéria de Jesus foi uma destacada heroína da Guerra de Independência do Brasil, conhecida por sua coragem e determinação excepcionais. Disfarçada de homem para se alistar no exército, ela lutou bravamente pelas forças independentes, demonstrando habilidades militares notáveis e um espírito indomável. Seu disfarce e coragem foram fundamentais para a causa da independência, e seu papel foi amplamente reconhecido pelo governo brasileiro. Em reconhecimento aos seus feitos, Maria Quitéria recebeu a medalha de Cavaleira da Ordem do Cruzeiro do Sul, uma das mais altas honras do país. Ela é celebrada como uma das figuras femininas mais importantes da história brasileira, representando a força e o valor das mulheres na luta pela liberdade e pela nação.</p>";
            modal.style.color="white"
            break;
        case 'info3':
            modalContent.innerHTML = "<h2>Maria Felipa de Oliveira</h2><p>Maria Felipa de Oliveira foi uma figura central na resistência pela independência da Bahia durante a Guerra de Independência do Brasil. Nascida em uma família pobre, ela destacou-se como líder de um grupo de guerreiros, principalmente mulheres, que lutaram contra as tropas portuguesas. Em 1823, Maria Felipa organizou e liderou ataques estratégicos contra as forças coloniais, usando seu conhecimento da região e sua habilidade em combate para causar grandes baixas aos inimigos e manter a luta pela liberdade viva. Sua liderança foi vital para a vitória dos brasileiros, e seu legado é celebrado por sua contribuição significativa e corajosa na luta pela independência.</p>";
            modal.style.color="white"
            break;
        case 'info4.':
            modalContent.innerHTML = "<h2>Bertha Lutz</h2><p>Bertha Lutz foi uma proeminente bióloga e sufragista brasileira, conhecida por sua significativa contribuição tanto para a ciência quanto para o movimento pelos direitos das mulheres. Fundadora da Federação Brasileira pelo Progresso Feminino, Lutz foi uma defensora incansável do direito ao voto feminino no Brasil, desempenhando um papel crucial na conquista desse direito em 1932. Além de seu ativismo, sua carreira científica é notável, especialmente por suas pesquisas em herpetologia, a ciência dos répteis e anfíbios. Lutz combinou sua paixão pela biologia com um firme compromisso com a igualdade de gênero, deixando um legado duradouro no avanço das mulheres em ambas as esferas.</p>";
            modal.style.color="white"
            break;
        case 'info5':
            modalContent.innerHTML = "<h2>Nise da Silveira</h2><p>Nise da Silveira foi uma pioneira na psiquiatria e psicologia no Brasil, renomada por sua abordagem inovadora no tratamento de doenças mentais e pela valorização da arte como ferramenta terapêutica. Ao fundar o Museu de Imagens do Inconsciente, ela criou um espaço único que promovia a expressão artística dos pacientes psiquiátricos, demonstrando como a arte pode ser um poderoso meio de cura e autoexpressão. Seu trabalho transformador não apenas desafiou práticas convencionais, mas também ajudou a estabelecer a arte como um componente essencial na terapia, deixando um legado duradouro na psiquiatria e na compreensão das condições mentais.</p>";
            modal.style.color="white"
            break;
        case 'info6':
            modalContent.innerHTML = "<h2>Enedina Alves Marques</h2><p>Enedina Alves Marques foi a primeira mulher negra a se formar em engenharia no Brasil, quebrando barreiras e estabelecendo um marco significativo na luta contra o racismo e a discriminação na engenharia. Formada em Engenharia Civil, ela fez importantes contribuições para diversos projetos de infraestrutura, demonstrando sua competência e dedicação no campo. Sua trajetória não apenas pavimentou o caminho para futuras gerações de mulheres negras na ciência e na engenharia, mas também serve como uma fonte de inspiração, mostrando que, apesar das adversidades, é possível alcançar grandes realizações e impactar positivamente a sociedade.</p>";
            modal.style.color="white"
            break;
        case 'info7':
            modalContent.innerHTML = "<h2>Sonja Ashauer</h2><p>Sonja Ashauer foi uma física notável cuja contribuição para a ciência brasileira foi marcante, especialmente na área de física nuclear. Apesar de uma carreira relativamente breve, ela se destacou pelo trabalho inovador em física de partículas, posicionando-se como uma das pioneiras na física no Brasil. Sua dedicação e pesquisa avançada ajudaram a expandir o conhecimento científico na área e deixaram um legado importante para futuras gerações de cientistas brasileiros. Através de suas descobertas e esforços, Sonja Ashauer é lembrada como uma figura chave na promoção e desenvolvimento da física no país.</p>";
            modal.style.color="white"
            break;
        case 'info8':
            modalContent.innerHTML = "<h2>Sônia Guimarães</h2><p>Sônia Guimarães é uma física renomada com destaque no campo da física de partículas, sendo uma das poucas mulheres negras a alcançar reconhecimento significativo na ciência no Brasil. Sua trajetória é marcada por contribuições substanciais para a pesquisa em física, e ela tem desempenhado um papel crucial na promoção da inclusão e da diversidade no ambiente científico. Além de suas realizações acadêmicas, Sônia Guimarães é uma defensora ativa da ampliação do acesso e da participação de grupos sub-representados na ciência, contribuindo para um ambiente mais equitativo e representativo no Brasil e além.</p>";
            modal.style.color="white"
            break;
        case 'info9':
            modalContent.innerHTML = "<h2>Léa Campos</h2><p>Léa Campos é uma árbitra esportiva destacada no Brasil, conhecida por seu papel ativo na arbitragem de diversos eventos esportivos. Ela se tornou uma defensora fervorosa da igualdade de gênero no esporte, trabalhando incansavelmente para promover e ampliar as oportunidades para mulheres na arbitragem. Sua trajetória é marcada por uma luta constante pela inclusão e pela equidade no campo esportivo, fazendo dela uma figura essencial na promoção da igualdade de gênero e na abertura de novos caminhos para mulheres no universo da arbitragem.</p>";
            modal.style.color="white"
            break;
        case 'info10':
            modalContent.innerHTML = "<h2>Vivian Miranda</h2><p>Vivian Miranda é a única brasileira a integrar um projeto da NASA, destacando-se como uma engenheira aeroespacial de grande importância. Sua contribuição para a agência espacial americana inclui envolvimento em projetos significativos, que refletem sua expertise e dedicação no campo da engenharia espacial. Vivian é uma fonte de inspiração para jovens mulheres aspirantes a carreiras na engenharia e na ciência espacial, demonstrando que é possível alcançar feitos notáveis em áreas altamente especializadas e desafiadoras.</p>";
            modal.style.color="white"
            break;
        case 'info11':
            modalContent.innerHTML = "<h2>Jaqueline Goes</h2><p>Jaqueline Goes é uma renomada cientista brasileira que atua na área de biomedicina. Ela é conhecida principalmente pelo seu trabalho no desenvolvimento e na pesquisa relacionada às vacinas contra a COVID-19. Jaqueline foi uma das cientistas envolvidas na coordenação e na execução dos testes clínicos da vacina de Oxford/AstraZeneca no Brasil, contribuindo significativamente para a luta contra a pandemia. Seu trabalho tem sido crucial para o avanço da ciência e da saúde pública no país.</p>";
            modal.style.color="white"
            break;
        case 'info12':
            modalContent.innerHTML = "<h2>Raimunda Putani Yawnawá</h2><p>Raimunda Putani Yawnawá é uma líder indígena da etnia Yawnawá, pertencente ao povo Pano, localizado na Amazônia. Ela é conhecida por seu trabalho em defesa dos direitos de sua comunidade e pela preservação da cultura e tradições de seu povo. Raimunda tem sido uma voz ativa na luta contra a degradação ambiental e a invasão de terras indígenas, promovendo a importância da autonomia e do respeito pelos saberes tradicionais dos povos originários.</p>";
            modal.style.color="white"
            break;
        default:
            modalContent.innerHTML = "<h2>História Desconhecida</h2><p>Sem descrição disponível.</p>";
    }

    modal.style.display = "block";
}

function closeInfo() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
}
document.querySelectorAll('.highlight').forEach(span => {
    span.addEventListener('click', function() {
        this.style.color = this.style.color === 'rgb(243, 156, 18)' ? '#187900' : '#f39c12';
    });
});
const video = document.getElementById('video');

video.addEventListener('click', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
});

