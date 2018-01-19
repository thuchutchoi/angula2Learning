//Một ứng dụng Angular 2 xây dựng trên vô số Component.
/*
*khi bạn muốn dùng một, một số module, thành phần nào đó từ module khác, 
bạn import chúng vào, đây là công việc để lấy về các thành phần mà module của bạn phụ thuộc vào.
*/
import { Component } from '@angular/core';
/*
*Nó là một khai báo (Decorator) cho class ngay sau đó, 
để chỉ ra rằng class đó là một Angular component, 
bên cạnh đó nó còn cung cấp các configuration metadata để Angular 2 biết cách tạo ra Component tương ứng.
*/
@Component({
  /*
  *@Component yêu cầu tối thiểu phải truyền vào một Javascript object với ít nhất thuộc tính: selector và templateUrl hoặc template.
  */
  selector: 'app-root',//selector hay mục đích chỉ ra rằng, khi trong template 
  //có một thẻ dạng như thẻ HTML có tên app-root thì Angular sẽ hiển thị Component khai báo bên dưới vào đó.
  templateUrl: './app.component.html',//templateUrl sử dụng để link đến phần template tương ứng của component này.
  // Trong một số trường hợp, các bạn có thể sử dụng inline template mà không cần tạo file html template riêng lẻ, 
  //khi đó bạn thay thế việc sử dụng property templateUrl thành property template.
  styleUrls: ['./app.component.css']//styleUrls để link đến phần style tương ứng cho component này, 
  //giá trị của nó là 1 mảng các files style. Tương tự như template, style có thể sử dụng inline style 
  //bằng cách thay vì dùng styleUrls bạn sẽ dùng styles property, nó cũng nhận giá trị là một mảng các string khai báo rule, 
  //bạn có thể sử dụng multi-line string như template property.
})
export class AppComponent {//Định nghĩa class tên là AppComponent, với property title sau đó export cho module khác sử dụng,
  title = 'Chao mung ban den voi AG2';
}
