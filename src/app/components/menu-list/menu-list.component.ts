<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  totalPreco: string = 'R$ 0,00';

  ngOnInit(): void {}

  atualizarPreco(): void {
    let total = 0;
    const checkboxes = document.querySelectorAll('.item input[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>;
    
    checkboxes.forEach((checkbox) => {
      const preco = parseFloat(checkbox.closest('.item')?.getAttribute('data-preco') || '0');
      total += preco;
    });
    
    this.totalPreco = `R$ ${total.toFixed(2)}`;
  }
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

>>>>>>> a371dc01bc2c0334c12438b9ec60c10cec1b4c82
}
