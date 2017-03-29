import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
        Side bar goes here
    </div> 
  `
})

export class SidebarComponent{}


@Component({
  selector: 'app-article',
  template:`
     <div>
        Titie: {{ article.title }}
        Description: {{ article.description }}
     </div>
  `
})

export class ArticleComponent{
  @Input('article') article: Object
}

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
        <app-article *ngFor="let article of articles" [article]="article"></app-article>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Object[];

  constructor(){
    this.articles = [
      {
        title: "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
        description: "Fusce"
      },
      {
        title: "ut erat. Sed nunc est, mollis non, cursus non, egestas",
        description: "Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus,"
      },
      {
        title: "in faucibus orci luctus et ultrices posuere cubilia Curae; Donec",
        description: "eros non enim commodo hendrerit. Donec porttitor tellus non"
      },
      {
        title: "morbi tristique senectus et netus et malesuada fames ac turpis",
        description: "Proin"
      },
      {
        title: "ante dictum mi, ac mattis velit justo nec ante. Maecenas",
        description: "lectus quis massa. Mauris vestibulum, neque"
      },
      {
        title: "dictum mi, ac mattis velit justo nec ante. Maecenas mi",
        description: "est ac mattis semper, dui lectus rutrum urna,"
      },
      {
        title: "Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus",
        description: "sodales purus, in molestie tortor nibh sit amet"
      },
      {
        title: "massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede",
        description: "ornare tortor at risus. Nunc ac sem"
      },
      {
        title: "eu tempor erat neque non quam. Pellentesque habitant morbi tristique",
        description: "morbi tristique senectus et netus"
      },
      {
        title: "Praesent eu nulla at sem molestie sodales. Mauris blandit enim",
        description: "eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur"
      },
      {
        title: "dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit",
        description: "massa. Mauris"
      },
      {
        title: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        description: "blandit."
      },
      {
        title: "ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,",
        description: "non magna. Nam ligula elit, pretium et,"
      },
      {
        title: "eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris",
        description: "Nam"
      },
      {
        title: "tristique senectus et netus et malesuada fames ac turpis egestas.",
        description: "aliquet, sem ut cursus luctus, ipsum leo elementum"
      },
      {
        title: "id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
        description: "rutrum magna."
      },
      {
        title: "Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus",
        description: "nec ante. Maecenas mi"
      },
      {
        title: "cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula",
        description: "Mauris vestibulum, neque sed dictum eleifend, nunc"
      },
      {
        title: "massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit",
        description: "sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed"
      },
      {
        title: "orci lacus vestibulum lorem, sit amet ultricies sem magna nec",
        description: "enim commodo hendrerit. Donec porttitor tellus non magna. Nam"
      },
      {
        title: "vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean",
        description: "pharetra. Quisque ac libero"
      },
      {
        title: "magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec",
        description: "In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas"
      },
      {
        title: "nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,",
        description: "ante ipsum primis in faucibus orci luctus et ultrices"
      },
      {
        title: "Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
        description: "consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet"
      },
      {
        title: "in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla",
        description: "nisl sem, consequat"
      },
      {
        title: "Duis cursus, diam at pretium aliquet, metus urna convallis erat,",
        description: "ante lectus convallis est, vitae"
      },
      {
        title: "at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum",
        description: "dictum sapien. Aenean massa. Integer vitae"
      },
      {
        title: "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
        description: "justo sit amet nulla. Donec non justo."
      },
      {
        title: "per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.",
        description: "vestibulum, neque sed dictum eleifend, nunc risus varius"
      },
      {
        title: "dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate",
        description: "magna tellus"
      },
      {
        title: "Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna,",
        description: "laoreet posuere, enim nisl elementum purus, accumsan"
      },
      {
        title: "est arcu ac orci. Ut semper pretium neque. Morbi quis",
        description: "sem eget massa. Suspendisse"
      },
      {
        title: "Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
        description: "Aliquam ultrices"
      },
      {
        title: "ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis",
        description: "neque et nunc. Quisque ornare tortor at risus. Nunc ac"
      },
      {
        title: "augue porttitor interdum. Sed auctor odio a purus. Duis elementum,",
        description: "ullamcorper magna. Sed eu"
      },
      {
        title: "aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque",
        description: "tortor at risus. Nunc ac"
      },
      {
        title: "diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget,",
        description: "aliquam eu, accumsan"
      },
      {
        title: "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In",
        description: "Curabitur vel lectus. Cum sociis natoque penatibus et magnis"
      },
      {
        title: "eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero",
        description: "magna. Sed eu eros."
      },
      {
        title: "est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed",
        description: "fringilla cursus purus. Nullam scelerisque neque sed sem egestas"
      },
      {
        title: "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc",
        description: "cursus et, eros. Proin ultrices. Duis"
      },
      {
        title: "sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem",
        description: "dictum eu, eleifend nec, malesuada ut, sem."
      },
      {
        title: "sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra,",
        description: "et ultrices"
      },
      {
        title: "metus sit amet ante. Vivamus non lorem vitae odio sagittis",
        description: "nisi. Cum sociis natoque"
      },
      {
        title: "Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy",
        description: "scelerisque neque. Nullam"
      },
      {
        title: "gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa",
        description: "turpis nec mauris blandit mattis. Cras eget"
      },
      {
        title: "tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante",
        description: "eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula"
      },
      {
        title: "Donec porttitor tellus non magna. Nam ligula elit, pretium et,",
        description: "at arcu."
      },
      {
        title: "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,",
        description: "molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas"
      },
      {
        title: "Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
        description: "ac risus. Morbi metus. Vivamus"
      },
      {
        title: "Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla",
        description: "imperdiet dictum magna. Ut tincidunt orci"
      },
      {
        title: "lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate",
        description: "luctus sit amet, faucibus ut, nulla. Cras eu tellus"
      },
      {
        title: "sodales elit erat vitae risus. Duis a mi fringilla mi",
        description: "dui. Fusce diam nunc, ullamcorper eu,"
      },
      {
        title: "ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,",
        description: "nunc. Quisque ornare tortor"
      },
      {
        title: "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
        description: "a neque. Nullam ut nisi a"
      },
      {
        title: "at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
        description: "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu."
      },
      {
        title: "arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt",
        description: "congue a, aliquet vel, vulputate"
      },
      {
        title: "eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut",
        description: "mauris"
      },
      {
        title: "consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim",
        description: "est mauris, rhoncus id, mollis nec,"
      },
      {
        title: "convallis, ante lectus convallis est, vitae sodales nisi magna sed",
        description: "dui lectus rutrum urna, nec luctus felis"
      },
      {
        title: "sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.",
        description: "velit justo nec ante. Maecenas mi felis, adipiscing"
      },
      {
        title: "diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat.",
        description: "consectetuer mauris"
      },
      {
        title: "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta",
        description: "erat neque non quam. Pellentesque habitant morbi tristique senectus"
      },
      {
        title: "tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam",
        description: "Nam"
      },
      {
        title: "elementum, dui quis accumsan convallis, ante lectus convallis est, vitae",
        description: "nec metus facilisis lorem tristique"
      },
      {
        title: "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra.",
        description: "luctus. Curabitur egestas nunc sed"
      },
      {
        title: "tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
        description: "lacinia vitae,"
      },
      {
        title: "Aenean gravida nunc sed pede. Cum sociis natoque penatibus et",
        description: "Duis"
      },
      {
        title: "mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin",
        description: "ut nisi a odio"
      },
      {
        title: "vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
        description: "neque. Sed eget lacus. Mauris"
      },
      {
        title: "nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.",
        description: "cursus."
      },
      {
        title: "nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
        description: "arcu. Sed eu nibh vulputate mauris sagittis"
      },
      {
        title: "semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim",
        description: "nec, cursus"
      },
      {
        title: "vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.",
        description: "fringilla cursus purus. Nullam scelerisque"
      },
      {
        title: "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor",
        description: "dictum"
      },
      {
        title: "metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus",
        description: "suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum"
      },
      {
        title: "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a",
        description: "felis. Donec tempor, est"
      },
      {
        title: "pede. Praesent eu dui. Cum sociis natoque penatibus et magnis",
        description: "mattis semper, dui lectus rutrum urna, nec luctus felis purus"
      },
      {
        title: "Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.",
        description: "mollis vitae, posuere at,"
      },
      {
        title: "netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
        description: "eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus"
      },
      {
        title: "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
        description: "ut"
      },
      {
        title: "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
        description: "Sed auctor odio a purus. Duis elementum, dui"
      },
      {
        title: "dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.",
        description: "ultricies adipiscing, enim mi tempor"
      },
      {
        title: "Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris.",
        description: "eros. Proin ultrices. Duis volutpat nunc sit"
      },
      {
        title: "sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",
        description: "semper, dui lectus rutrum urna,"
      },
      {
        title: "nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula.",
        description: "dictum. Proin eget odio. Aliquam vulputate"
      },
      {
        title: "vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt",
        description: "nec tempus scelerisque,"
      },
      {
        title: "porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo",
        description: "et malesuada"
      },
      {
        title: "Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas",
        description: "luctus et ultrices"
      },
      {
        title: "quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam",
        description: "Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed"
      },
      {
        title: "congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit",
        description: "eu tellus"
      },
      {
        title: "semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae",
        description: "amet diam eu dolor"
      },
      {
        title: "placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna",
        description: "massa lobortis ultrices. Vivamus rhoncus."
      },
      {
        title: "Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer",
        description: "nunc. In at pede. Cras vulputate"
      },
      {
        title: "accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
        description: "parturient montes, nascetur ridiculus mus. Proin vel"
      },
      {
        title: "Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor,",
        description: "sem ut cursus luctus, ipsum leo elementum sem,"
      },
      {
        title: "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
        description: "dui, in sodales"
      },
      {
        title: "ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus.",
        description: "hendrerit a,"
      },
      {
        title: "mattis ornare, lectus ante dictum mi, ac mattis velit justo",
        description: "vel, venenatis"
      },
      {
        title: "lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc",
        description: "magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl."
      }
    ];
  }
}
