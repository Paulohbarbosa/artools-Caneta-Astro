<div align="center"> 
<!-- Preview / Social Media Centralizada -->
<img src="public/assets/raw_files/caneta.jpeg" alt="Preview do Projeto" width="100%">

<h1> Artools Precision Pen (Astro) </h1>

<!-- Badges (Gráficos referentes ao projeto) -->

![Categoria](https://img.shields.io/badge/Categoria%20-%20Estudo-%237159c1?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)

</div>

## 📑 Descrição

Projeto **Artools Precision Pen**, laboratório de criação de software, sendo desenvolvido como estudo do curso de Webdesinger com IA do [Asimov Academy](https://www.asimov.academy/). Originalmente uma página estática em HTML, CSS e JS, foi totalmente modernizado para uma aplicação web performática e de alto padrão utilizando **Astro**.

Recentemente, o projeto evoluiu de uma única *landing page* para um e-commerce estático funcional. As principais novas funcionalidades incluem:
- **Página de Catálogo**: Listagem completa dos produtos vindos de uma fonte de dados local (JSON).
- **Páginas Dinâmicas de Produto (`[id].astro`)**: Uso do `getStaticPaths` do Astro para gerar páginas estáticas individuais para cada caneta com suas próprias galerias de imagens, especificações técnicas, e avaliações.
- **Componentes Dinâmicos**: Componentes como `<TechSpecs />` e as avaliações por estrelas que reagem de forma dinâmica aos dados de cada produto.

## 🚀 Tecnologias

As principais ferramentas e tecnologias utilizadas na construção deste projeto foram:

- **[Astro](https://astro.build/)** - Framework web ideal para sites focados em conteúdo e landing pages, garantindo carregamento inicial instantâneo através da sua arquitetura de ilhas e HTML estático, ótimo para SEO. O roteamento dinâmico foi essencial para criar as páginas dos produtos.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização rápida, responsiva e consistente direto na marcação.
- **[GSAP & ScrollTrigger](https://gsap.com/)** - Bibliotecas de animação utilizadas para criar efeitos visuais imersivos e fluidos ao rolar a página.

---

## 🛠️ Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/Paulohbarbosa/artools-Caneta-Astro

# Acesse a pasta do projeto no terminal/cmd
cd Site_Astro-Lab

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm run dev
```
