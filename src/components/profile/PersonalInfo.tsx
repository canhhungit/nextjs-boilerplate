import React from 'react';
interface PersonalInfoData {
  name: string;
  age: number;
  profession: string;
}
// Hàm giả lập lấy dữ liệu với setTimeout
const fetchPersonalInfo = (): PersonalInfoData => {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       name: 'Nguyễn Văn A',
  //       age: 30,
  //       profession: 'Kỹ sư phần mềm',
  //     });
  //   }, 2000); // 2 giây
  // });
  return {
    name: 'Nguyễn Văn A',
    age: 30,
    profession: 'Kỹ sư phần mềm',
  };
};

// Server Component
export default   function PersonalInfo() {
  const data =   fetchPersonalInfo();

  return (
    <div>
      <h2>Thông Tin Cá Nhân</h2>
      <p>Tên: {data.name}</p>
      <p>Tuổi: {data.age}</p>
      <p>Nghề nghiệp: {data.profession}</p>
    </div>
  );
}
