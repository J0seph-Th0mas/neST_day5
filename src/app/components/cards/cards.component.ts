import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  product =[
    {id:1, 
      title: 'Clothing',
      image: 'https://m.media-amazon.com/images/I/91pa17xXjoL._AC_UF226,226_FMjpg_.jpg'     

    },
    {id:2, 
      title: 'Mobiles',
      image:'https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg'
      

    },
    {id:3, 
      title: 'Beauty',
      image:'https://m.media-amazon.com/images/G/31/img23/Beauty/BAU/NewLaunch/GULABARI_SHOWER_GEL_440x330._CB573355838_.jpg'
      

    },
    {id:4, 
      title: 'Sports & Fitness',
      image:'https://m.media-amazon.com/images/I/71kDKp7N4-L._AC._SR360,460.jpg'
    },
    {id:5, 
      title: 'Toys & Games',
      image: 'https://m.media-amazon.com/images/I/41dqCDhh3EL._AC_UF226,226_FMjpg_.jpg'     

    },
    {id:6, 
      title: 'Bike And Car Accessories',
      image: 'https://m.media-amazon.com/images/I/61PdhEIxRwL._AC_UL480_FMwebp_QL65_.jpg'     

    },
    {id:7, 
      title: 'Books',
      image: 'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg'     

    },
    {id:8, 
      title: 'Movies & TV Shows',
      image: 'https://m.media-amazon.com/images/I/81tIiqHj2eL._AC._SR360,460.jpg'     

    },
    {id:9, 
      title: 'Echo & Alexa',
      image: 'https://m.media-amazon.com/images/I/41tEQogY3qL.AC_SX250.jpg'     

    },
    {id:10, 
      title: 'Fire TV',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/31Duuwk6oXL._AC_SX184_.jpg'     

    },
    {id:11, 
      title: 'Kindle EReaders & EBook',
      image: 'https://m.media-amazon.com/images/I/61hDt0NjOQL._SY450_.jpg'     

    },
    {id:12, 
      title: 'Prime Video',
      image: 'https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png'     

    },
  ]

}
