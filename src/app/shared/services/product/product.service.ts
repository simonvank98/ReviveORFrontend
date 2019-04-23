import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[] = [
    {
      id: 1,
      name: 'The frozen water earring black gold',
      categoryId: 2,
      status: 'A status',
      price: 180,
      conditionId: 1,
      productImage: [
        {
          id: 1,
          productId: 1,
          imagePath: 'https://theoceanrepublic.com/images/products/274/thumb/OR-2-7108.jpg'
        },
        {
          id: 2,
          productId: 1,
          imagePath: 'https://theoceanrepublic.com/images/products/274/slides/origins/OR-8397.jpg',
        }
      ]
    },
    {
      id: 2,
      name: 'Paddlefish bracelet gold',
      categoryId: 3,
      status: 'Another status',
      price: 100,
      conditionId: 2,
      productImage: [
        {
          id: 3,
          productId: 2,
          imagePath: 'https://theoceanrepublic.com/images/products/276/slides/origins/OR-7230.jpg'
        },
        {
          id: 4,
          productId: 2,
          imagePath: 'https://theoceanrepublic.com/images/products/276/slides/origins/OR-7234.jpg',
        },
        {
          id: 5,
          productId: 2,
          imagePath: 'https://theoceanrepublic.com/images/products/276/slides/origins/OR-9072-2.jpg',
        },
      ]
    }
  ];
}
