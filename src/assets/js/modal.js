

export function modal() {

        
        document.querySelector('.modal__bg').style.display = 'block';
        document.querySelector('.modal__content').style.display = 'block';

        let projectTitle = document.getElementById('projectTitle');

        if( modalName == 'project01' ) {
            projectTitle.textContent = '2023 포트폴리오';
        }


}