
(() => {
const jogos = [

   {
    nome: "River Raid",
    arquivo: "roms/River Raid (1982) (Activision) [!].zip",
    imagem: "roms/River Raid (1982) (Activision) [!].jpg"
  },
  {
    nome: "Enduro",
    arquivo: "roms/Enduro.zip",
    imagem: "roms/Enduro.jpg"
  },
  {
    nome: "Boxing",
    arquivo: "roms/Boxing.bin",
    imagem: "roms/boxing.png"
  },  
  {
    nome: "Checkerks",
    arquivo: "roms/Checkers.bin",
    imagem: "roms/Checkers.png"
  },
  {
    nome: "Adventure (1978)",
    arquivo: "roms/Adventure (1978) (Atari).zip",
    imagem: "roms/Adventure (1978) (Atari).png"
  },
  {
    nome: "Air Sea",
    arquivo: "roms/Air-Sea.bin",
    imagem: "roms/air-sea.png"
  },
  {
    nome: "Berzerk",
    arquivo: "roms/Berzerk.bin",
    imagem: "roms/berzek.jpg"
  },
  {
    nome: "Championship",
    arquivo: "roms/Championship.bin",
    imagem: "roms/championship.png"
  },
  {
    nome: "Commando",
    arquivo: "roms/Commando.bin",
    imagem: "roms/commando.png"
  },
  {
    nome: "Cosmic",
    arquivo: "roms/Cosmic.bin",
    imagem: "roms/cosmic.png"
  },
  {
    nome: "Dig Dug",
    arquivo: "roms/Dig Dug (1983) (Atari) (1).zip",
    imagem: "roms/Dig Dug (1983) (Atari).jpg"
  },
  {
    nome: "Freeway",
    arquivo: "roms/Freeway.bin",
    imagem: "roms/freeway.png"
  },
  {
    nome: "Grand Prix",
    arquivo: "roms/Grand Prix.bin",
    imagem: "roms/grand-prix.png"
  },
  {
    nome: "Jawbreaker",
    arquivo: "roms/Jawbreaker.zip",
    imagem: "roms/Jawbreaker.jpg"
  },
  {
    nome: "Keystone Kapers",
    arquivo: "roms/Keystone.bin",
    imagem: "roms/Keystone Kapers.jpg"
  },
  {
    nome: "Mario Bros",
    arquivo: "roms/Mario Bros (1983) (Atari).zip",
    imagem: "roms/Mario Bros (1983) (Atari).jpg"
  },
  {
    nome: "Midnight",
    arquivo: "roms/Midnight.bin",
    imagem: "roms/midnight.png"
  },
  {
    nome: "Outlaw",
    arquivo: "roms/Outlaw.bin",
    imagem: "roms/outlaw.png"
  },
  {
    nome: "Pac-Man",
    arquivo: "roms/Pac-Man (1981) (Atari).zip",
    imagem: "roms/Pac-Man (1981) (Atari).jpg"
  },
  {
    nome: "Pitfall!",
    arquivo: "roms/Pitfall! (1982) (Activision).zip",
    imagem: "roms/Pitfall! (1982) (Activision) [!].jpg"
  },
  {
    nome: "Pole Position",
    arquivo: "roms/PoleP.bin",
    imagem: "roms/poloP.png"
  },
  {
    nome: "Q*bert",
    arquivo: "roms/Q-bert.bin",
    imagem: "roms/q-bert.png"
  },
  {
    nome: "Skiing",
    arquivo: "roms/Skiing.bin",
    imagem: "roms/skiing.png"
  },
  {
    nome: "Spider-Man",
    arquivo: "roms/Spider-Man.bin",
    imagem: "roms/spider-man.jpg"
  },
  {
    nome: "Pole Position",
    arquivo: "roms/PoleP.bin",
    imagem: "roms/poloP.png"
  },
  {
    nome: "Turmoil",
    arquivo: "roms/Turmoil.bin",
    imagem: "roms/turmoil.png"
  },
  {
    nome: "Tennis",
    arquivo: "roms/Tennis.zip",
    imagem: "roms/Tennis.jpg"
  },
  {
    nome: "Fishing",
    arquivo: "roms/Fishing.zip",
    imagem: "roms/Fishing.png"
  }    
];

  const TOTAL_RETANGULOS = 28;


  function abrirJogo(arquivo) {
    const url = new URL(window.location.href);
    url.searchParams.set("ROM", arquivo);
    window.location.assign(url.href);
  }

  function configurarMenu() {
    const dialogo = document.getElementById("jt-recent-roms");
    if (!dialogo) return;

    const lista = dialogo.querySelector("ul");
    if (!lista) return;

    // Eventos de clique instalados apenas uma vez.
    if (dialogo.dataset.menuFixo !== "1") {
      const selecionar = (evento) => {
        const item = evento.target.closest(
          "#jt-recent-roms li[data-rom-url]"
        );

        if (!item) return;

        evento.preventDefault();
        evento.stopPropagation();
        evento.stopImmediatePropagation();

        abrirJogo(item.dataset.romUrl);
      };

      ["pointerdown", "mousedown", "touchstart", "click"]
        .forEach(tipo => {
          dialogo.addEventListener(tipo, selecionar, true);
        });

      dialogo.dataset.menuFixo = "1";

 const forcarTransform = () => {
    const dialogo = document.getElementById("jt-recent-roms");

    if (!dialogo) return;

    dialogo.style.setProperty(
        "transform",
        "translateY(-14px) scale(0.3930)",
        "important"
    );
};


    }

    // Não recria a grade se já estiver personalizada.
    if (lista.querySelector("li[data-rom-url]")) return;

    lista.innerHTML = "";

    // Grade fixa de 7 colunas e 3 linhas.
    lista.style.display = "grid";
    lista.style.gridTemplateColumns = "repeat(7, 150px)";
    lista.style.gridTemplateRows = "repeat(3, 150px)";
    lista.style.gridAutoRows = "150px";
    lista.style.gap = "12px";
   // lista.style.width = "300px";
    //lista.style.minWidth = "360px";
    lista.style.maxWidth = "none";
    lista.style.margin = "0 auto";
    lista.style.padding = "0";
    lista.style.boxSizing = "border-box";
    lista.style.listStyle = "none";

    // Cria os 16 espaços para capas.
    for (let indice = 0; indice < TOTAL_RETANGULOS; indice++) {
      const jogo = jogos[indice];

      const item = document.createElement("li");

      item.className = "jt-visible jt-toggle";
      item.style.display = "flex";
      item.style.alignItems = "center";
      item.style.justifyContent = "center";


        item.style.width = "155px";
        item.style.height = "175px";
        item.style.minWidth = "60px";
        item.style.minHeight = "50px";
        item.style.flexShrink = "0";

      item.style.padding = "0";
      item.style.margin = "0";
      item.style.boxSizing = "border-box";
      item.style.overflow = "hidden";
      item.style.border = "1px solid rgba(255,255,255,0.3)";
      item.style.borderRadius = "3px";
      item.style.background = "#151515";

      if (jogo) {
        item.dataset.romUrl = jogo.arquivo;
        item.style.cursor = "pointer";

        const capa = document.createElement("img");

        capa.src = jogo.imagem;
        capa.alt = jogo.nome;
    // capa.width = 150;
      //  capa.height = 195;
        capa.draggable = false;
        capa.loading = "eager";

        capa.style.display = "block";
        capa.style.width = "100%";
        capa.style.height = "100%";
        capa.style.objectFit = "fill";
        capa.style.objectPosition = "center";

        // Se a imagem não existir, deixa o espaço vazio.
        capa.onerror = () => {
          console.warn("Capa não encontrada:", jogo.imagem);
          capa.remove();
        };

        item.appendChild(capa);

        if (indice === 0) {
          item.classList.add("jt-toggle-checked", "jt-selected");
        }
      }

      lista.appendChild(item);
    }

    // Tamanho adaptável do menu.
// Janela principal
dialogo.style.width = "1155px";
dialogo.style.minWidth = "auto";
dialogo.style.maxWidth = "110vw";
//dialogo.style.height = "500px !important";
dialogo.style.minHeight = "680px";
//dialogo.style.maxHeight = "99vh";
dialogo.style.overflow = "auto";
//dialogo.style.boxSizing = "border-box";
//dialogo.style.position = "relative";
dialogo.style.left = "-40%";

// Grade das capas
lista.style.width = "100%";
lista.style.minWidth = "0";
lista.style.maxWidth = "none";
lista.style.boxSizing = "border-box";



  }

  // Detecta a criação do menu pelo Javatari.
  const observador = new MutationObserver(configurarMenu);

  observador.observe(document.documentElement, {
    childList: true,    
    subtree: true
  });

  configurarMenu();
})();


(() => {
    const aplicarEscala = () => {
        const dialogo = document.getElementById("jt-recent-roms");
        if (!dialogo) return;

        dialogo.style.transform = "translateY(-12px) scale(0.6500)";
       // dialogo.style.transformOrigin = "top left";
    };

    const observar = new MutationObserver(() => {
        requestAnimationFrame(aplicarEscala);
    });

    observar.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    document.addEventListener("click", () => {
        requestAnimationFrame(aplicarEscala);
    }, true);

    aplicarEscala();
})();


function abrirModalImagem() {
    document.getElementById("modalImagem").style.display = "flex";

    document.body.style.overflow = "hidden";
}

function fecharModalImagem(event) {

    // Fecha somente se clicar no fundo ou no X
    if (event && event.target.id !== "modalImagem") {
        return;
    }

    document.getElementById("modalImagem").style.display = "none";

    document.body.style.overflow = "";
}

// Fechar com ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("modalImagem").style.display = "none";
        document.body.style.overflow = "";
    }
});