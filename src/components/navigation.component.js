import {Component} from '../core/component'

export class NavigationComponent extends Component {
   constructor (id) {
      super(id);
      
      this.tabs = [];
   }
      
   init() {
      this.$el.addEventListener('click', tabClickHendler.bind(this));
   };
   
   registerTabs(tabs){
      this.tabs = tabs
   }
};

function tabClickHendler(event) {
   event.preventDefault();
   if (event.target.classList.contains('tab')){
      this.$el.querySelectorAll('.tab')
      .forEach(tab =>{tab.classList.remove('active')});
      //remove active all tabs
      event.target.classList.add('active');
      //add class to clicked tab

      console.log(this.tabs);
      const activeTab = this.tabs.find(tab => tab.name === event.target.dataset.name);
      console.log(activeTab);
      this.tabs.forEach(tab => tab.component.hide());
      //hide tabs
      activeTab.component.show();
      //show selected tab
   }
}