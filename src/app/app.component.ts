import { Component, Input } from '@angular/core';
import {auditTime} from "rxjs/operator/auditTime";
import {ajaxDelete} from "rxjs/observable/dom/AjaxObservable";


class Article{
  public title: string;
  public description: string;

  constructor(aTitle: string, aDescription: string){
    this.title = aTitle;
    this.description = aDescription;
  }
}

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
  @Input('article') article: Article
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
  articles: Article[];

  constructor(){
    this.articles = [
      new Article("pede. Cum sociis natoque penatibus et magnis dis parturient montes,", "Fusce"),
      new Article("ut erat. Sed nunc est, mollis non, cursus non, egestas", "Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus,"),
      new Article("in faucibus orci luctus et ultrices posuere cubilia Curae; Donec", "eros non enim commodo hendrerit. Donec porttitor tellus non"),
      new Article("morbi tristique senectus et netus et malesuada fames ac turpis", "Proin"),
      new Article("ante dictum mi, ac mattis velit justo nec ante. Maecenas", "lectus quis massa. Mauris vestibulum, neque"),
      new Article("dictum mi, ac mattis velit justo nec ante. Maecenas mi", "est ac mattis semper, dui lectus rutrum urna,"),
      new Article("Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus", "sodales purus, in molestie tortor nibh sit amet"),
      new Article("massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede", "ornare tortor at risus. Nunc ac sem"),
      new Article("eu tempor erat neque non quam. Pellentesque habitant morbi tristique", "morbi tristique senectus et netus"),
      new Article("Praesent eu nulla at sem molestie sodales. Mauris blandit enim", "eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur"),
      new Article("dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit", "massa. Mauris"),
      new Article("natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "blandit."),
      new Article("ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,", "non magna. Nam ligula elit, pretium et,"),
      new Article("eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris", "Nam"),
      new Article("tristique senectus et netus et malesuada fames ac turpis egestas.", "aliquet, sem ut cursus luctus, ipsum leo elementum"),
      new Article("id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend", "rutrum magna."),
      new Article("Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus", "nec ante. Maecenas mi"),
      new Article("cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula", "Mauris vestibulum, neque sed dictum eleifend, nunc"),
      new Article("massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit", "sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed"),
      new Article("orci lacus vestibulum lorem, sit amet ultricies sem magna nec", "enim commodo hendrerit. Donec porttitor tellus non magna. Nam"),
      new Article("vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean", "pharetra. Quisque ac libero"),
      new Article("magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec", "In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas"),
      new Article("nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,", "ante ipsum primis in faucibus orci luctus et ultrices"),
      new Article("Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra", "consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet"),
      new Article("in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla", "nisl sem, consequat"),
      new Article("Duis cursus, diam at pretium aliquet, metus urna convallis erat,", "ante lectus convallis est, vitae"),
      new Article("at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum", "dictum sapien. Aenean massa. Integer vitae"),
      new Article("Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi", "justo sit amet nulla. Donec non justo."),
      new Article("per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.", "vestibulum, neque sed dictum eleifend, nunc risus varius"),
      new Article("dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate", "magna tellus"),
      new Article("Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna,", "laoreet posuere, enim nisl elementum purus, accumsan"),
      new Article("est arcu ac orci. Ut semper pretium neque. Morbi quis", "sem eget massa. Suspendisse"),
      new Article("Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra", "Aliquam ultrices"),
      new Article("ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis", "neque et nunc. Quisque ornare tortor at risus. Nunc ac"),
      new Article("augue porttitor interdum. Sed auctor odio a purus. Duis elementum,", "ullamcorper magna. Sed eu"),
      new Article("aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque", "tortor at risus. Nunc ac"),
      new Article("diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget,", "aliquam eu, accumsan"),
      new Article("semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In", "Curabitur vel lectus. Cum sociis natoque penatibus et magnis"),
      new Article("eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero", "magna. Sed eu eros."),
      new Article("est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed", "fringilla cursus purus. Nullam scelerisque neque sed sem egestas"),
      new Article("luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc", "cursus et, eros. Proin ultrices. Duis"),
      new Article("sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem", "dictum eu, eleifend nec, malesuada ut, sem."),
      new Article("sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra,", "et ultrices"),
      new Article("metus sit amet ante. Vivamus non lorem vitae odio sagittis", "nisi. Cum sociis natoque"),
      new Article("Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy", "scelerisque neque. Nullam"),
      new Article("gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa", "turpis nec mauris blandit mattis. Cras eget"),
      new Article("tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante", "eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula"),
      new Article("Donec porttitor tellus non magna. Nam ligula elit, pretium et,", "at arcu."),
      new Article("dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,", "molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas"),
      new Article("Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum", "ac risus. Morbi metus. Vivamus"),
      new Article("Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla", "imperdiet dictum magna. Ut tincidunt orci"),
      new Article("lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate", "luctus sit amet, faucibus ut, nulla. Cras eu tellus"),
      new Article("sodales elit erat vitae risus. Duis a mi fringilla mi", "dui. Fusce diam nunc, ullamcorper eu,"),
      new Article("ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,", "nunc. Quisque ornare tortor"),
      new Article("sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus", "a neque. Nullam ut nisi a"),
      new Article("at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada", "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu."),
      new Article("arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt", "congue a, aliquet vel, vulputate"),
      new Article("eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut", "mauris"),
      new Article("consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim", "est mauris, rhoncus id, mollis nec,"),
      new Article("convallis, ante lectus convallis est, vitae sodales nisi magna sed", "dui lectus rutrum urna, nec luctus felis"),
      new Article("sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.", "velit justo nec ante. Maecenas mi felis, adipiscing"),
      new Article("diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat.", "consectetuer mauris"),
      new Article("egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta", "erat neque non quam. Pellentesque habitant morbi tristique senectus"),
      new Article("tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam", "Nam"),
      new Article("elementum, dui quis accumsan convallis, ante lectus convallis est, vitae", "nec metus facilisis lorem tristique"),
      new Article("Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra.", "luctus. Curabitur egestas nunc sed"),
      new Article("tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at", "lacinia vitae,"),
      new Article("Aenean gravida nunc sed pede. Cum sociis natoque penatibus et", "Duis"),
      new Article("mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin", "ut nisi a odio"),
      new Article("vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet", "neque. Sed eget lacus. Mauris"),
      new Article("nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.", "cursus."),
      new Article("nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit", "arcu. Sed eu nibh vulputate mauris sagittis"),
      new Article("semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim", "nec, cursus"),
      new Article("vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.", "fringilla cursus purus. Nullam scelerisque"),
      new Article("porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor", "dictum"),
      new Article("metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus", "suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum"),
      new Article("dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a", "felis. Donec tempor, est"),
      new Article("pede. Praesent eu dui. Cum sociis natoque penatibus et magnis", "mattis semper, dui lectus rutrum urna, nec luctus felis purus"),
      new Article("Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.", "mollis vitae, posuere at,"),
      new Article("netus et malesuada fames ac turpis egestas. Fusce aliquet magna", "eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus"),
      new Article("vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac", "ut"),
      new Article("pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.", "Sed auctor odio a purus. Duis elementum, dui"),
      new Article("dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.", "ultricies adipiscing, enim mi tempor"),
      new Article("Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris.", "eros. Proin ultrices. Duis volutpat nunc sit"),
      new Article("sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis", "semper, dui lectus rutrum urna,"),
      new Article("nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula.", "dictum. Proin eget odio. Aliquam vulputate"),
      new Article("vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt", "nec tempus scelerisque,"),
      new Article("porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo", "et malesuada"),
      new Article("Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas", "luctus et ultrices"),
      new Article("quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam", "Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed"),
      new Article("congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit", "eu tellus"),
      new Article("semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae", "amet diam eu dolor"),
      new Article("placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna", "massa lobortis ultrices. Vivamus rhoncus."),
      new Article("Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer", "nunc. In at pede. Cras vulputate"),
      new Article("accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.", "parturient montes, nascetur ridiculus mus. Proin vel"),
      new Article("Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor,", "sem ut cursus luctus, ipsum leo elementum sem,"),
      new Article("vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat", "dui, in sodales"),
      new Article("ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus.", "hendrerit a,"),
      new Article("mattis ornare, lectus ante dictum mi, ac mattis velit justo", "vel, venenatis"),
      new Article("lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc", "magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl.")
    ];
  }
}
