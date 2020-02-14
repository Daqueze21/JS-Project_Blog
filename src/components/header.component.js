import {Component} from '../core/component';

export class HeaderComponent extends Component {
   constructor(id) {
      super(id);
   };

   init() {
      if(localStorage.getItem('visited')){
         this.hide();
      }//hide header if visite page before 
      const btn = this.$el.querySelector('.js-header-start');
      btn.addEventListener('click', buttonHandler.bind(this));
   }
};

//private func(bind her in iventLister)
function buttonHandler() {
   localStorage.setItem('visited', JSON.stringify(true));
   this.hide();
};