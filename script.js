 const body = document.body;
        const projectCover = document.getElementById('projectCover');
        const coverImage = document.getElementById('coverImage');
        const projectThemeLabel = document.getElementById('projectThemeLabel');
        const linkItems = document.querySelectorAll('.link-item');

        linkItems.forEach(link => {

            // ===== HOVER ENTER =====
            link.addEventListener('mouseenter', function () {
                const themeBg = this.getAttribute('data-theme-bg');
                const coverSrc = this.getAttribute('data-cover');
                const themeName = this.getAttribute('data-theme-name');

                // Muda o fundo do body para o tema do projeto
                body.style.background = themeBg;
                body.classList.add('theme-active');

                // Mostra a capa do projeto
                coverImage.src = coverSrc;
                projectCover.classList.add('active');

                // Mostra o nome/tema do projeto
                projectThemeLabel.textContent = themeName;
                projectThemeLabel.classList.add('active');
            });

            // ===== HOVER LEAVE =====
            link.addEventListener('mouseleave', function () {
                // Restaura o fundo original
                body.style.background = '#1a1a1a';
                body.classList.remove('theme-active');

                // Esconde a capa
                projectCover.classList.remove('active');
                coverImage.src = '';

                // Esconde o tema
                projectThemeLabel.classList.remove('active');
                projectThemeLabel.textContent = '';
            });
        });