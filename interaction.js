document.addEventListener("DOMContentLoaded",()=>{
    const faqContainer=document.querySelector('.faq-accordation');
       faqContainer.addEventListener('click',(e)=>{
        const groupHeader=e.target.closest('.faq-dropdown-header');
        if(!groupHeader) return;
        const group =groupHeader.parentElement;
        const groupBody=group.querySelector('.faq-dropdown-body');
        const icon=groupHeader.querySelector('.faq-icon');

        icon.classList.toggle('open');
        groupBody.classList.toggle('open');
        const otherGroups=faqContainer.querySelectorAll('.faq-dropdown');
        otherGroups.foreach((otherGroups)=>{
            if(otherGroups!=group){
                const otherGroupBody=otherGroups.querySelector('.faq-dropdown-body');
                const otherIcon =otherGroups.querySelector('.faq-icon');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');

            }
        });
       });

});
