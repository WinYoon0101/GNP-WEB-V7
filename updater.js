const fs = require('fs');
const filepath = 'f:/WORK/GNP/CODE WEB/GNP_English_Web-V7/components/summer-course-tab.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Phased Replacements
content = content.replace('descVI: \"Hi?u b?n thân, hình thành thói quen, xây n?n t?ng tu duy.\"', 'descVI: \"Hi?u b?n thân  hình thành thói quen  n?n t?ng tu duy\"');
content = content.replace('descVI: \"K? nang, tu duy và ch? d?ng phát tri?n b?n thân.\"', 'descVI: \"K? nang  tu duy  ch? d?ng\"');
content = content.replace('descVI: \"Khám phá xã h?i, tìm hi?u ngh? nghi?p, tinh th?n trách nhi?m.\"', 'descVI: \"Khám phá xã h?i  ngh? nghi?p  trách nhi?m\"');
content = content.replace('descVI: \"Cho di, th? hi?n b?n thân và t?ng k?t hành trình hè.\"', 'descVI: \"Cho di  th? hi?n b?n thân  t?ng k?t hành trình\"');


// Week Replacements
content = content.replace('descVI: \"Tính cách, s? thích, di?m m?nh. Ghi chép nh?t ký This is me.\"', 'descVI: \"Nh?n di?n b?n thân: tính cách  s? thích  di?m m?nh\\nNh?t ký This is me\"');

content = content.replace('descVI: \"An u?ng, v?n d?ng, ng? ngh?, v? sinh. Các k? nang t? cham sóc b?n thân.\"', 'descVI: \"Thói quen lành m?nh: an u?ng  v?n d?ng  ng? ngh?  v? sinh chung\\nK? nang: t? cham sóc b?n thân\"');

content = content.replace('descVI: \"Nh?n di?n và qu?n lý c?m xúc. Cách giao ti?p khi bu?n, gi?n, th?t v?ng.\"', 'descVI: \"Nh?n di?n & qu?n lý c?m xúc\\nGiao ti?p khi bu?n  gi?n  th?t v?ng\"');

content = content.replace('descVI: \"Sai không x?u, b? cu?c m?i dáng s?. Th?c hi?n th? thách cá nhân h?ng ngày.\"', 'descVI: \"Sai không x?u  b? cu?c m?i dáng s?\\nTh? thách cá nhân h?ng ngày\"');

content = content.replace('descVI: \"Qu?n lý th?i gian vi?c h?c, gi?i trí. Bi?t cách l?p k? ho?ch don gi?n.\"', 'descVI: \"Qu?n lý th?i gian  vi?c h?c  gi?i trí\\nL?p k? ho?ch don gi?n\"');

content = content.replace('descVI: \"K? nang l?ng nghe, chia s?, làm vi?c nhóm và gi?i quy?t mâu thu?n.\"', 'descVI: \"L?ng nghe  chia s?  làm vi?c nhóm\\nGi?i quy?t mâu thu?n\"');

content = content.replace('descVI: \"Tìm hi?u gia dình, th?y cô, b?n bè, c?ng d?ng. Bi?t on và tôn tr?ng s? khác bi?t.\"', 'descVI: \"Gia dình  th?y cô  b?n bè  c?ng d?ng\\nBi?t on & tôn tr?ng s? khác bi?t\"');

content = content.replace('descVI: \"Quy?n & trách nhi?m c?a công dân nh?. Gi? gìn môi tru?ng, không gian chung.\"', 'descVI: \"Quy?n & trách nhi?m c?a công dân nh?\\nGi? gìn môi tru?ng  không gian chung\"');

content = content.replace('descVI: \"Khám phá ngh? nghi?p phù h?p. Ð? xu?t vi?c nh?: giúp gia dình, l?p h?c, d? án mini.\"', 'descVI: \"Khám phá ngh? nghi?p (phù h?p d? tu?i)\\nÐ? xu?t công vi?c nh?:\\n- Nhóm nh?: giúp vi?c gia dình\\n- Nhóm gi?a: h? tr? l?p h?c / s? ki?n\\n- Nhóm l?n: mini project  event  truy?n thông\"');

content = content.replace('descVI: \"Th?c hi?n d? án c?ng d?ng nh?. Hu?ng t?i làm vi?c th?t, t?o giá tr? th?t.\"', 'descVI: \"Làm d? án c?ng d?ng nh?\\nLàm vi?c th?t  giá tr? th?t\"');

content = content.replace('descVI: \"Khái quát hành trình. Showcase tru?c ph? huynh và Portfolio cá nhân.\"', 'descVI: \"T?ng k?t  nhìn l?i  trình bày hành trình\\nShowcase cho PH\"');

fs.writeFileSync(filepath, content);
console.log('Content updated successfully');
