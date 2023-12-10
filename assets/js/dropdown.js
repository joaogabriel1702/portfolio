function displayData(selectedValue) {
    let contentArea = document.getElementById("displayArea");

    if (selectedValue === "1") {
        contentArea.innerHTML = "<h3>ARB Telecom - Manutenção de Fibra Óptica</h3><ul><li>Criação e manutenção de relatórios para faturamento</li><li>Desenvolvimento de um programa em Java para o auxílio no preenchimento das informações</li><li>Criação de dashboards utilizando Power BI</li></ul><p>Ferramentas: Java, Excel, Power BI</p>"
    } else if (selectedValue === "2") {
        contentArea.innerHTML = "<h3>Empresa Júnior UNICAP - Consultoria</h3><ul><li>Primeira parte</li><li>Segunda parte</li><li>terceira parte</li></ul><p>Analista, Recife, Pernambuco</p>";
    } else if (selectedValue === "3") {
        contentArea.innerHTML = "<h3>New School - Educação</h3><ul><li>Primeira parte</li><li>Segunda parte</li><li>terceira parte</li></ul><p>Desenvolvedor FullStack Voluntário, Home Offce</p>";
    } else if (selectedValue === "4") {
        contentArea.innerHTML = "<h3>Centro Hospitalar Albert Sabin - Hospitalar</h3><ul><li>Primeira parte</li><li>Segunda parte</li><li>terceira parte</li></ul><p>Jovem Aprendiz - Auxiliar de TI, Recife, Brasil</p>";
    } else {
        contentArea.innerHTML = "";
    }
}