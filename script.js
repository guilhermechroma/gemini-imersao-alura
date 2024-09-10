const input = document.querySelector("input");
const button = document.querySelector("button");
const resultados = document.querySelector(".resultados-pesquisa");

button.addEventListener("click", () => {
  const termoPesquisa = input.value;
  const termoResultado = "macaco";
  console.log(termoPesquisa);

  // Aqui você faria uma busca em uma base de dados ou API
  // Por enquanto, aqui há resultados simulados
  const resultadosSimulados = [
    {
      titulo: "🐵 Macaco-prego ❕",
      descricao:
        "Os macacos-prego são primatas conhecidos por sua inteligência e sociabilidade. Vivem em grupos complexos, onde a hierarquia social e a cooperação são fundamentais. Sua cauda preênsil, embora não tão ágil quanto a dos macacos-aranha, auxilia na locomoção e na manipulação de objetos. São onívoros, alimentando-se de frutas, insetos, pequenos vertebrados e até mesmo ovos. Uma característica marcante dos macacos-pregos é a capacidade de utilizar ferramentas, como pedras, para quebrar nozes. Essa habilidade demonstra sua inteligência e adaptabilidade a diferentes ambientes.",
      imagem: "images/galego.jpg",
      link: "https://pt.wikipedia.org/wiki/Macaco-prego",
    },
    {
      titulo: "🐵 Macaco-aranha 🕷️",
      descricao:
        "Os macacos-aranha são famosos por seus longos membros e cauda extremamente preênsil, que lhes permite se movimentar com agilidade entre as árvores, balançando de galho em galho. Essa adaptação os torna excelentes acrobatas da floresta. Vivem em grupos sociais complexos, onde a comunicação e a cooperação são essenciais. Sua dieta é principalmente frugívora, mas também incluem folhas, flores e pequenos animais. Os macacos-aranha são animais altamente sociáveis e estabelecem laços fortes dentro do grupo. Sua cauda, além de auxiliar na locomoção, serve como um quinto membro, permitindo-lhes segurar alimentos e realizar tarefas complexas.",
      imagem: "images/aranha.webp",
      link: "https://pt.wikipedia.org/wiki/Macaco-aranha",
    },
  ];

  // Limpa os resultados anteriores
  resultados.innerHTML = "";

  // Pega o span de id "error" da section da main
  var error = document.getElementById("error");

  // Espera o usuário digitar a palavra "macaco", em qualquer case, para mostrar os resultados
  if (
    termoPesquisa.localeCompare(termoResultado, undefined, {
      sensitivity: "accent",
    }) === 0
  ) {
    // Limpa o texto do span "error"
    error.textContent = "";

    // Adiciona os resultados simulados à div
    resultadosSimulados.forEach((resultado) => {
      const itemResultado = document.createElement("div");
      itemResultado.classList.add("item-resultado");
      itemResultado.innerHTML = `
      <h2>${resultado.titulo}</h2>
      <div>
      <p class="descricao-meta">${resultado.descricao}
        <span>
          <a href="${resultado.link}" target="_blank">Mais Informações</a>
        </span>
      </p>
      <img src="${resultado.imagem}"/>
      </div>
    `;
      resultados.appendChild(itemResultado);
    });
  } else {
    // Define o texto de erro do span "error"
    error.textContent = "Espécie não encontrada";
    error.style.visibility = "visible";
  }
});
