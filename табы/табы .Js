// products табы 

const produtctTabs = document.querySelectorAll('.products__tab-item');

produtctTabs.forEach(function(item, i) {

   item.addEventListener('click', function() {
      
      const tabName = this.dataset.tab,
      tabContent = document.querySelector('.products__tab-item-content[data-tab="'+tabName+'"]');
      
      document.querySelectorAll('.products__tab-item-content.active').forEach(function(item, i){
         item.classList.remove('active');
      });
      
      document.querySelectorAll('.products__tab-item.active').forEach(function(item, i){
         item.classList.remove('active');
      });      
      
      tabContent.classList.add('active');
      this.classList.add('active');
   });

})