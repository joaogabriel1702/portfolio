function displayData(selectedValue) {
    let contentArea = document.getElementById("displayArea");

    if (selectedValue === "1") {
        contentArea.innerHTML = "<h3>ARB Telecom - Manutenção de Fibra Óptica</h3><p>Estagiário</p><ul><li>Criação e manutenção de relatórios para faturamento</li><li>Desenvolvimento de um programa em Java para o auxílio no preenchimento das informações</li><li>Criação de dashboards utilizando Power BI</li></ul><p>Ferramentas: Java, Excel, Power BI.</p>"
    } else if (selectedValue === "2") {
        contentArea.innerHTML = "<h3>Empresa Júnior UNICAP - Consultoria</h3><p>Analista</p><ul><li>Reformulação do site com base na SEO</li><li>Criação de projetos internos com o time Executivo</li><li>Criação de dashboards em Power BI</li></ul><p>Ferramentas: Trello, Figma, Miro, Power BI.</p>";
    } else if (selectedValue === "3") {
        contentArea.innerHTML = "<h3>New School - Educação</h3><p>Desenvolvedor FullStack Voluntário</p><ul><li>Desenvolvimento de telas e funcionalidades no front-end</li><li>Resolução de bugs no Back-End</li></ul><p>Ferramentas: Git, JavaScript, Vue.js, Typescript, Kanba, Scrum.</p>";
    } else if (selectedValue === "4") {
        contentArea.innerHTML = "<h3>Centro Hospitalar Albert Sabin - Hospitalar</h3><p>Jovem Aprendiz - Auxiliar de TI</p><ul><li>Criação de uma intranet com PHP, Drupal e banco de dados da Oracle</li><li>Manutenção de Máquinas</li><li>Auxílio para os funcionários que utilizavam o sistema DGS</li><li>Auxílio remoto via AnyDesk</li></ul><p>Ferramentas: Git, Trello, PHP, Oracle SQL, Drupal.</p>";
    } else {
        contentArea.innerHTML = "";
    }
}