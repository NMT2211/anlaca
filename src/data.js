const danhGia = [
    { MaDanhGia: 1, MaQuanAn: 1, MaNguoiDung: "U001", NoiDungDanhGia: "Phở rất ngon, nước dùng đậm đà!", SoSao: 5, NgayDanhGia: "2025-02-05" },
    { MaDanhGia: 2, MaQuanAn: 1, MaNguoiDung: "U002", NoiDungDanhGia: "Món ăn ngon nhưng phục vụ hơi chậm.", SoSao: 4, NgayDanhGia: "2025-02-05" },
    { MaDanhGia: 3, MaQuanAn: 2, MaNguoiDung: "U003", NoiDungDanhGia: "Không gian thoáng đãng, phù hợp cho gia đình.", SoSao: 5, NgayDanhGia: "2025-02-05" },
  ];
  
  
  const loaiQuan = [
    { MaLoaiQuan: 1, TenLoaiQuan: "Quán ăn gia đình" },
    { MaLoaiQuan: 2, TenLoaiQuan: "Nhà hàng" },
    { MaLoaiQuan: 3, TenLoaiQuan: "Nhà hàng sang trọng" },
    { MaLoaiQuan: 4, TenLoaiQuan: "Quán nhậu" },
    { MaLoaiQuan: 5, TenLoaiQuan: "Quán ăn nhanh" },
  ];
  
  const nguoiDung = [
    { MaNguoiDung: "admin", TenNguoiDung: "Phạm Thị E", Email: "phamthie@gmail.com", MatKhau: "admin@123", Admin: true, NgayTao: "2025-02-05" },
    { MaNguoiDung: "U001", TenNguoiDung: "Nguyễn Văn A", Email: "nguyenvana@gmail.com", MatKhau: "password123", Admin: false, NgayTao: "2025-02-05" },
    { MaNguoiDung: "U002", TenNguoiDung: "Trần Văn B", Email: "tranvanb@gmail.com", MatKhau: "123456", Admin: false, NgayTao: "2025-02-06" },
    { MaNguoiDung: "U003", TenNguoiDung: "Lê Thị C", Email: "lethic@gmail.com", MatKhau: "qwerty", Admin: false, NgayTao: "2025-02-06" },
  ];
  
  const danhSachQuanAn = [
    {
      images: [
        "phothin.jpg",
        "phothin2.jpg",
        "pho-thin-1.jpg",
        "pho-thin-2.jpg",
        "pho-thin-3.jpg"
      ],
      address: "13 Lò Đúc, Hà Nội",
      googleMapLink: "https://goo.gl/maps/abc123",
      province: "Thành phố Hà Nội",
      phone: "0243821234",
      name: "Phở Thìn",
      rating: 4.8,
      description: "Phở bò truyền thống nổi tiếng Hà Nội",
      openingHours: "6:00 - 22:00",
      id: 1,
      averagePrice: 50000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "bun-cha-huong-lien-1.jpg",
        "bun-cha-huong-lien-2.jpg",
        "bun-cha-huong-lien-3.jpg"
      ],
      address: "24 Lê Văn Hưu, Hà Nội",
      googleMapLink: "https://goo.gl/maps/xyz456",
      province: "Thành phố Hà Nội",
      phone: "02439428588",
      name: "Bún Chả Hương Liên",
      rating: 4.5,
      description: "Nơi cựu Tổng thống Obama từng ăn",
      openingHours: "9:00 - 21:00",
      id: 2,
      averagePrice: 40000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "highlands-coffee-1.jpg",
        "highlands-coffee-2.jpg",
        "highlands-coffee-3.jpg"
      ],
      address: "15 Ngô Quyền, Hà Nội",
      googleMapLink: "https://goo.gl/maps/def789",
      province: "Thành phố Hà Nội",
      phone: "02466778899",
      name: "Highlands Coffee",
      rating: 4.6,
      description: "Chuỗi cafe hiện đại, không gian đẹp",
      openingHours: "7:00 - 22:00",
      id: 3,
      averagePrice: 50000,
      type: "Quán cafe"
    },
    {
      images: [
        "pizza-4p-1.jpg",
        "pizza-4p-2.jpg",
        "pizza-4p-3.jpg"
      ],
      address: "8/15 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh",
      googleMapLink: "https://goo.gl/maps/ghi101112",
      province: "Thành phố Hồ Chí Minh",
      phone: "02836221144",
      name: "Pizza 4P",
      rating: 4.9,
      description: "Nhà hàng pizza nổi tiếng với phong cách Nhật",
      openingHours: "10:00 - 23:00",
      id: 4,
      averagePrice: 200000,
      type: "Nhà hàng sang trọng"
    },
    {
      images: [
        "hu-tieu-my-tho-1.jpg",
        "hu-tieu-my-tho-2.jpg",
        "hu-tieu-my-tho-3.jpg"
      ],
      address: "72 Lê Thị Hồng Gấm, TP. Mỹ Tho, Tiền Giang",
      googleMapLink: "https://goo.gl/maps/jkl131415",
      province: "Tỉnh Tiền Giang",
      phone: "02733888999",
      name: "Hủ Tiếu Mỹ Tho",
      rating: 4.7,
      description: "Hủ tiếu đặc sản miền Tây",
      openingHours: "6:00 - 21:00",
      id: 5,
      averagePrice: 35000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "quan-an-ngon-1.jpg",
        "quan-an-ngon-2.jpg",
        "quan-an-ngon-3.jpg"
      ],
      address: "18 Phan Bội Châu, Hà Nội",
      googleMapLink: "https://goo.gl/maps/mno161718",
      province: "Thành phố Hà Nội",
      phone: "02439425388",
      name: "Quán Ăn Ngon",
      rating: 4.6,
      description: "Nhiều món đặc sản ba miền",
      openingHours: "10:00 - 22:00",
      id: 6,
      averagePrice: 120000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "com-tam-ba-ghien-1.jpg",
        "com-tam-ba-ghien-2.jpg",
        "com-tam-ba-ghien-3.jpg"
      ],
      address: "84 Đặng Văn Ngữ, Quận Phú Nhuận, TP. Hồ Chí Minh",
      googleMapLink: "https://goo.gl/maps/pqr192021",
      province: "Thành phố Hồ Chí Minh",
      phone: "02835122334",
      name: "Cơm Tấm Ba Ghiền",
      rating: 4.7,
      description: "Cơm tấm sườn bì chả nổi tiếng Sài Gòn",
      openingHours: "7:00 - 22:00",
      id: 7,
      averagePrice: 60000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "kichi-kichi-1.jpg",
        "kichi-kichi-2.jpg",
        "kichi-kichi-3.jpg"
      ],
      address: "Vincom Đồng Khởi, TP. Hồ Chí Minh",
      googleMapLink: "https://goo.gl/maps/stu222324",
      province: "Thành phố Hồ Chí Minh",
      phone: "02839112244",
      name: "Lẩu Băng Chuyền Kichi Kichi",
      rating: 4.8,
      description: "Lẩu băng chuyền với nhiều món đa dạng",
      openingHours: "10:00 - 22:00",
      id: 8,
      averagePrice: 250000,
      type: "Quán buffet"
    },
    {
      images: [
        "bun-bo-hue-o-xuan-1.jpg",
        "bun-bo-hue-o-xuan-2.jpg",
        "bun-bo-hue-o-xuan-3.jpg"
      ],
      address: "17 Lý Tự Trọng, TP. Huế",
      googleMapLink: "https://goo.gl/maps/vwx252627",
      province: "Thành phố Huế",
      phone: "02343888222",
      name: "Bún Bò Huế O Xuân",
      rating: 4.5,
      description: "Bún bò Huế đậm đà hương vị miền Trung",
      openingHours: "6:00 - 20:00",
      id: 9,
      averagePrice: 40000,
      type: "Quán ăn gia đình"
    },
    {
      images: [
        "nem-nuong-ninh-hoa-1.jpg",
        "nem-nuong-ninh-hoa-2.jpg",
        "nem-nuong-ninh-hoa-3.jpg"
      ],
      address: "50 Nguyễn Thị Minh Khai, Nha Trang, Khánh Hòa",
      googleMapLink: "https://goo.gl/maps/yz282930",
      province: "Tỉnh Khánh Hòa",
      phone: "02583888111",
      name: "Nem Nướng Ninh Hòa",
      rating: 4.7,
      description: "Nem nướng nổi tiếng Nha Trang",
      openingHours: "8:00 - 21:00",
      id: 10,
      averagePrice: 60000,
      type: "Quán ăn gia đình"
      },
      {
        images: [
          "hai-san-cua-vang-1.jpg",
          "hai-san-cua-vang-2.jpg",
          "hai-san-cua-vang-3.jpg"
        ],
        address: "Số 1 Nhà Thờ, Hạ Long, Quảng Ninh",
        googleMapLink: "https://goo.gl/maps/abc313233",
        province: "Tỉnh Quảng Ninh",
        phone: "0333888555",
        name: "Hải Sản Cua Vàng",
        rating: 4.6,
        description: "Nhà hàng hải sản với các món từ cua",
        openingHours: "10:00 - 22:00",
        id: 11,
        averagePrice: 300000,
        type: "Quán hải sản"
      },
      {
        images: [
          "banh-xeo-ba-duong-1.jpg",
          "banh-xeo-ba-duong-2.jpg",
          "banh-xeo-ba-duong-3.jpg"
        ],
        address: "K280/23 Hoàng Diệu, Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/def343536",
        province: "Thành phố Đà Nẵng",
        phone: "02363882233",
        name: "Bánh Xèo Bà Dưỡng",
        rating: 4.8,
        description: "Bánh xèo và nem lụi đặc sản Đà Nẵng",
        openingHours: "9:00 - 21:00",
        id: 12,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-ca-duoi-ut-muoi-1.jpg",
          "lau-ca-duoi-ut-muoi-2.jpg",
          "lau-ca-duoi-ut-muoi-3.jpg"
        ],
        address: "34 Trương Công Định, Vũng Tàu",
        googleMapLink: "https://goo.gl/maps/ghi373839",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        phone: "02543888444",
        name: "Lẩu Cá Đuối Út Mười",
        rating: 4.5,
        description: "Lẩu cá đuối tươi ngon, nổi tiếng ở Vũng Tàu",
        openingHours: "10:00 - 22:00",
        id: 13,
        averagePrice: 300000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-canh-cua-co-bay-1.jpg",
          "banh-canh-cua-co-bay-2.jpg",
          "banh-canh-cua-co-bay-3.jpg"
        ],
        address: "43 Ngô Gia Tự, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/jkl404142",
        province: "Thành phố Cần Thơ",
        phone: "02923888455",
        name: "Bánh Canh Cua Cô Bảy",
        rating: 4.7,
        description: "Bánh canh cua đậm đà miền Tây",
        openingHours: "7:00 - 21:00",
        id: 14,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-duyen-ha-1.jpg",
          "nha-hang-duyen-ha-2.jpg",
          "nha-hang-duyen-ha-3.jpg"
        ],
        address: "89 Trần Phú, Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/mno434445",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888333",
        name: "Nhà Hàng Duyên Hà",
        rating: 4.9,
        description: "Nhà hàng sang trọng với view biển",
        openingHours: "10:00 - 23:00",
        id: 15,
        averagePrice: 500000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "banh-mi-phuong-1.jpg",
          "banh-mi-phuong-2.jpg",
          "banh-mi-phuong-3.jpg"
        ],
        address: "2B Phan Chu Trinh, TP. Hội An, Quảng Nam",
        googleMapLink: "https://goo.gl/maps/pqr464748",
        province: "Tỉnh Quảng Nam",
        phone: "02353888499",
        name: "Bánh Mì Phượng",
        rating: 4.8,
        description: "Bánh mì Hội An nổi tiếng",
        openingHours: "7:00 - 22:00",
        id: 16,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lang-nuong-nam-bo-1.jpg",
          "lang-nuong-nam-bo-2.jpg",
          "lang-nuong-nam-bo-3.jpg"
        ],
        address: "16 Võ Văn Kiệt, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/stu495051",
        province: "Thành phố Hồ Chí Minh",
        phone: "02836221555",
        name: "Làng Nướng Nam Bộ",
        rating: 4.6,
        description: "Quán nướng đậm chất Nam Bộ",
        openingHours: "10:00 - 23:00",
        id: 17,
        averagePrice: 250000,
        type: "Quán nướng BBQ"
      },
      {
        images: [
          "bun-rieu-ganh-1.jpg",
          "bun-rieu-ganh-2.jpg",
          "bun-rieu-ganh-3.jpg"
        ],
        address: "18 Trần Cao Vân, Hà Nội",
        googleMapLink: "https://goo.gl/maps/vwx525354",
        province: "Thành phố Hà Nội",
        phone: "02438223388",
        name: "Bún Riêu Gánh",
        rating: 4.5,
        description: "Bún riêu đặc sản Hà Nội",
        openingHours: "6:00 - 21:00",
        id: 18,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-lac-vien-1.jpg",
          "nha-hang-lac-vien-2.jpg",
          "nha-hang-lac-vien-3.jpg"
        ],
        address: "12 Lạch Tray, TP. Hải Phòng",
        googleMapLink: "https://goo.gl/maps/yz555657",
        province: "Thành phố Hải Phòng",
        phone: "02253888322",
        name: "Nhà Hàng Lạc Viên",
        rating: 4.7,
        description: "Nhà hàng ẩm thực truyền thống và hiện đại",
        openingHours: "9:00 - 22:00",
        id: 19,
        averagePrice: 400000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "banh-cuon-thanh-van-1.jpg",
          "banh-cuon-thanh-van-2.jpg",
          "banh-cuon-thanh-van-3.jpg"
        ],
        address: "12 Hàng Gà, Hà Nội",
        googleMapLink: "https://goo.gl/maps/abc585960",
        province: "Thành phố Hà Nội",
        phone: "02438225566",
        name: "Bánh Cuốn Thanh Vân",
        rating: 4.8,
        description: "Bánh cuốn gia truyền nổi tiếng",
        openingHours: "6:00 - 21:00",
        id: 20,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-ga-la-e-tao-ngo-1.jpg",
          "lau-ga-la-e-tao-ngo-2.jpg",
          "lau-ga-la-e-tao-ngo-3.jpg"
        ],
        address: "5 Đường 3/4, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/abc616263",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888999",
        name: "Lẩu Gà Lá É Tao Ngộ",
        rating: 4.8,
        description: "Lẩu gà lá é đặc sản Đà Lạt",
        openingHours: "10:00 - 22:00",
        id: 21,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "che-thai-lien-1.jpg",
          "che-thai-lien-2.jpg",
          "che-thai-lien-3.jpg"
        ],
        address: "189 Hoàng Diệu, Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/def646566",
        province: "Thành phố Đà Nẵng",
        phone: "02363888444",
        name: "Chè Thái Liên",
        rating: 4.5,
        description: "Quán chè nổi tiếng với chè thái sầu riêng",
        openingHours: "9:00 - 21:00",
        id: 22,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-ga-ba-buoi-1.jpg",
          "com-ga-ba-buoi-2.jpg",
          "com-ga-ba-buoi-3.jpg"
        ],
        address: "22 Phan Chu Trinh, Hội An, Quảng Nam",
        googleMapLink: "https://goo.gl/maps/ghi676869",
        province: "Tỉnh Quảng Nam",
        phone: "02353888222",
        name: "Cơm Gà Bà Buội",
        rating: 4.7,
        description: "Cơm gà Hội An nổi tiếng",
        openingHours: "10:00 - 22:00",
        id: 23,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "oc-dao-1.jpg",
          "oc-dao-2.jpg",
          "oc-dao-3.jpg"
        ],
        address: "132 Nguyễn Thái Học, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/jkl707172",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839112233",
        name: "Ốc Đào",
        rating: 4.6,
        description: "Quán ốc tươi ngon, đa dạng món ăn",
        openingHours: "17:00 - 23:00",
        id: 24,
        averagePrice: 150000,
        type: "Quán hải sản"
      },
      {
        images: [
          "banh-trang-nuong-di-dinh-1.jpg",
          "banh-trang-nuong-di-dinh-2.jpg",
          "banh-trang-nuong-di-dinh-3.jpg"
        ],
        address: "26 Hoàng Diệu, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/mno737475",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888333",
        name: "Bánh Tráng Nướng Dì Đinh",
        rating: 4.9,
        description: "Món bánh tráng nướng đặc sản",
        openingHours: "15:00 - 22:00",
        id: 25,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "chao-ech-singapore-1.jpg",
          "chao-ech-singapore-2.jpg",
          "chao-ech-singapore-3.jpg"
        ],
        address: "Vincom Trần Duy Hưng, Hà Nội",
        googleMapLink: "https://goo.gl/maps/pqr767778",
        province: "Thành phố Hà Nội",
        phone: "02439423388",
        name: "Quán Cháo Ếch Singapore",
        rating: 4.5,
        description: "Món cháo ếch độc đáo",
        openingHours: "10:00 - 22:00",
        id: 26,
        averagePrice: 120000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-mam-sau-khai-1.jpg",
          "bun-mam-sau-khai-2.jpg",
          "bun-mam-sau-khai-3.jpg"
        ],
        address: "10A Trần Phú, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/stu798081",
        province: "Thành phố Cần Thơ",
        phone: "02923888444",
        name: "Bún Mắm Sáu Khải",
        rating: 4.6,
        description: "Món bún mắm đậm chất miền Tây",
        openingHours: "8:00 - 21:00",
        id: 27,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-phu-quoc-1.jpg",
          "nha-hang-phu-quoc-2.jpg",
          "nha-hang-phu-quoc-3.jpg"
        ],
        address: "96 Võ Thị Sáu, TP. Phú Quốc, Kiên Giang",
        googleMapLink: "https://goo.gl/maps/vwx828384",
        province: "Tỉnh Kiên Giang",
        phone: "02973888233",
        name: "Nhà Hàng Phú Quốc",
        rating: 4.8,
        description: "Hải sản tươi sống, đặc sản Phú Quốc",
        openingHours: "10:00 - 22:00",
        id: 28,
        averagePrice: 300000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "cha-ca-la-vong-1.jpg",
          "cha-ca-la-vong-2.jpg",
          "cha-ca-la-vong-3.jpg"
        ],
        address: "14 Chả Cá, Hà Nội",
        googleMapLink: "https://goo.gl/maps/yz858687",
        province: "Thành phố Hà Nội",
        phone: "02438225577",
        name: "Chả Cá Lã Vọng",
        rating: 4.7,
        description: "Món chả cá truyền thống Hà Nội",
        openingHours: "9:00 - 21:00",
        id: 29,
        averagePrice: 150000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "goi-cuon-thanh-xuan-1.jpg",
          "goi-cuon-thanh-xuan-2.jpg",
          "goi-cuon-thanh-xuan-3.jpg"
        ],
        address: "12 Ngô Tất Tố, Quận Bình Thạnh, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/abc888990",
        province: "Thành phố Hồ Chí Minh",
        phone: "02835122345",
        name: "Gỏi Cuốn Thanh Xuân",
        rating: 4.5,
        description: "Món gỏi cuốn ngon miệng",
        openingHours: "7:00 - 21:00",
        id: 30,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-mam-dong-que-1.jpg",
          "lau-mam-dong-que-2.jpg",
          "lau-mam-dong-que-3.jpg"
        ],
        address: "44 Nguyễn Văn Cừ, TP. Long Xuyên, An Giang",
        googleMapLink: "https://goo.gl/maps/def919293",
        province: "Tỉnh An Giang",
        phone: "02963888455",
        name: "Lẩu Mắm Đồng Quê",
        rating: 4.6,
        description: "Lẩu mắm miền Tây đậm đà",
        openingHours: "10:00 - 22:00",
        id: 31,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "hai-san-xanh-1.jpg",
          "hai-san-xanh-2.jpg",
          "hai-san-xanh-3.jpg"
        ],
        address: "60 Trần Hưng Đạo, TP. Hạ Long, Quảng Ninh",
        googleMapLink: "https://goo.gl/maps/ghi949596",
        province: "Tỉnh Quảng Ninh",
        phone: "0333888444",
        name: "Nhà Hàng Hải Sản Xanh",
        rating: 4.7,
        description: "Hải sản tươi sống",
        openingHours: "9:00 - 22:00",
        id: 32,
        averagePrice: 300000,
        type: "Quán hải sản"
      },
      {
        images: [
          "quan-chay-phuoc-hai-1.jpg",
          "quan-chay-phuoc-hai-2.jpg",
          "quan-chay-phuoc-hai-3.jpg"
        ],
        address: "19 Nguyễn Tri Phương, TP. Huế",
        googleMapLink: "https://goo.gl/maps/jkl979899",
        province: "Thành phố Huế",
        phone: "02343888222",
        name: "Quán Chay Phước Hải",
        rating: 4.8,
        description: "Quán chay với không gian yên tĩnh",
        openingHours: "7:00 - 21:00",
        id: 33,
        averagePrice: 50000,
        type: "Quán chay"
      },
      {
        images: [
          "nem-chua-ran-hang-bong-1.jpg",
          "nem-chua-ran-hang-bong-2.jpg",
          "nem-chua-ran-hang-bong-3.jpg"
        ],
        address: "90 Hàng Bông, Hà Nội",
        googleMapLink: "https://goo.gl/maps/mno100101102",
        province: "Thành phố Hà Nội",
        phone: "02438224455",
        name: "Nem Chua Rán Hàng Bông",
        rating: 4.5,
        description: "Món nem chua rán đặc sản Hà Nội",
        openingHours: "15:00 - 21:00",
        id: 34,
        averagePrice: 25000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-am-thuc-que-1.jpg",
          "nha-hang-am-thuc-que-2.jpg",
          "nha-hang-am-thuc-que-3.jpg"
        ],
        address: "72 Nguyễn Huệ, TP. Vĩnh Long",
        googleMapLink: "https://goo.gl/maps/pqr103104105",
        province: "Tỉnh Vĩnh Long",
        phone: "02703888233",
        name: "Nhà Hàng Ẩm Thực Quê",
        rating: 4.7,
        description: "Ẩm thực đặc sắc miền Tây",
        openingHours: "10:00 - 22:00",
        id: 35,
        averagePrice: 150000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "lau-ca-keo-can-tho-1.jpg",
          "lau-ca-keo-can-tho-2.jpg",
          "lau-ca-keo-can-tho-3.jpg"
        ],
        address: "22 Võ Văn Kiệt, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/stu106107108",
        province: "Thành phố Cần Thơ",
        phone: "02923888322",
        name: "Lẩu Cá Kèo Cần Thơ",
        rating: 4.5,
        description: "Lẩu cá kèo tươi ngon",
        openingHours: "10:00 - 22:00",
        id: 36,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-da-cua-hai-phong-1.jpg",
          "banh-da-cua-hai-phong-2.jpg",
          "banh-da-cua-hai-phong-3.jpg"
        ],
        address: "34 Nguyễn Đức Cảnh, TP. Hải Phòng",
        googleMapLink: "https://goo.gl/maps/vwx109110111",
        province: "Thành phố Hải Phòng",
        phone: "02253888233",
        name: "Bánh Đa Cua Hải Phòng",
        rating: 4.6,
        description: "Bánh đa cua truyền thống Hải Phòng",
        openingHours: "7:00 - 21:00",
        id: 37,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bep-nha-1.jpg",
          "bep-nha-2.jpg",
          "bep-nha-3.jpg"
        ],
        address: "120 Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/yz112113114",
        province: "Thành phố Hồ Chí Minh",
        phone: "02836221555",
        name: "Nhà Hàng Bếp Nhà",
        rating: 4.9,
        description: "Ẩm thực Việt Nam cao cấp",
        openingHours: "10:00 - 23:00",
        id: 38,
        averagePrice: 400000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "quan-nuong-hong-dao-1.jpg",
          "quan-nuong-hong-dao-2.jpg",
          "quan-nuong-hong-dao-3.jpg"
        ],
        address: "66 Nguyễn Tri Phương, TP. Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/abc115116117",
        province: "Thành phố Đà Nẵng",
        phone: "02363888333",
        name: "Quán Nướng Hồng Đào",
        rating: 4.8,
        description: "Quán nướng BBQ chất lượng cao",
        openingHours: "16:00 - 23:00",
        id: 39,
        averagePrice: 250000,
        type: "Quán nướng BBQ"
      },
      {
        images: [
          "hu-tieu-sa-dec-1.jpg",
          "hu-tieu-sa-dec-2.jpg",
          "hu-tieu-sa-dec-3.jpg"
        ],
        address: "50 Lê Thánh Tôn, Sa Đéc, Đồng Tháp",
        googleMapLink: "https://goo.gl/maps/def118119120",
        province: "Tỉnh Đồng Tháp",
        phone: "02773888244",
        name: "Hủ Tiếu Sa Đéc",
        rating: 4.7,
        description: "Hủ tiếu truyền thống Sa Đéc",
        openingHours: "6:00 - 21:00",
        id: 40,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-cha-sinh-tu-1.jpg",
          "bun-cha-sinh-tu-2.jpg",
          "bun-cha-sinh-tu-3.jpg"
        ],
        address: "8 Nguyễn Hữu Huân, Hà Nội",
        googleMapLink: "https://goo.gl/maps/abc121122123",
        province: "Thành phố Hà Nội",
        phone: "02439223344",
        name: "Bún Chả Sinh Từ",
        rating: 4.6,
        description: "Nơi thưởng thức món bún chả truyền thống",
        openingHours: "10:00 - 21:00",
        id: 41,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-de-tran-gia-1.jpg",
          "lau-de-tran-gia-2.jpg",
          "lau-de-tran-gia-3.jpg"
        ],
        address: "59 Tô Hiến Thành, TP. Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/def124125126",
        province: "Tỉnh Khánh Hòa",
        phone: "02583588344",
        name: "Lẩu Dê Trần Gia",
        rating: 4.5,
        description: "Lẩu dê tươi ngon",
        openingHours: "11:00 - 22:00",
        id: 42,
        averagePrice: 250000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-canh-trang-bang-ut-hue-1.jpg",
          "banh-canh-trang-bang-ut-hue-2.jpg",
          "banh-canh-trang-bang-ut-hue-3.jpg"
        ],
        address: "22 Quốc Lộ 22, Tây Ninh",
        googleMapLink: "https://goo.gl/maps/ghi127128129",
        province: "Tỉnh Tây Ninh",
        phone: "02763888255",
        name: "Bánh Canh Trảng Bàng Út Huệ",
        rating: 4.8,
        description: "Món bánh canh nổi tiếng Trảng Bàng",
        openingHours: "9:00 - 21:00",
        id: 43,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "cha-dong-quy-nhon-1.jpg",
          "cha-dong-quy-nhon-2.jpg",
          "cha-dong-quy-nhon-3.jpg"
        ],
        address: "24 Trần Hưng Đạo, TP. Quy Nhơn, Bình Định",
        googleMapLink: "https://goo.gl/maps/jkl130131132",
        province: "Tỉnh Bình Định",
        phone: "02563888333",
        name: "Quán Chả Dông",
        rating: 4.7,
        description: "Đặc sản chả dông Quy Nhơn",
        openingHours: "10:00 - 21:00",
        id: 44,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "oc-dao-vinh-1.jpg",
          "oc-dao-vinh-2.jpg",
          "oc-dao-vinh-3.jpg"
        ],
        address: "78 Lý Tự Trọng, TP. Vinh, Nghệ An",
        googleMapLink: "https://goo.gl/maps/mno133134135",
        province: "Tỉnh Nghệ An",
        phone: "02383888433",
        name: "Quán Ốc Đảo",
        rating: 4.5,
        description: "Ốc biển tươi sống",
        openingHours: "15:00 - 22:00",
        id: 45,
        averagePrice: 150000,
        type: "Quán hải sản"
      },
      {
        images: [
          "banh-cuon-hang-dieu-1.jpg",
          "banh-cuon-hang-dieu-2.jpg",
          "banh-cuon-hang-dieu-3.jpg"
        ],
        address: "14 Hàng Điếu, Hà Nội",
        googleMapLink: "https://goo.gl/maps/pqr136137138",
        province: "Thành phố Hà Nội",
        phone: "02439225566",
        name: "Bánh Cuốn Gia Truyền Hàng Điếu",
        rating: 4.8,
        description: "Bánh cuốn nóng, nhân thơm ngon",
        openingHours: "7:00 - 21:00",
        id: 46,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "pho-phu-gia-1.jpg",
          "pho-phu-gia-2.jpg",
          "pho-phu-gia-3.jpg"
        ],
        address: "34 Hàng Da, Hà Nội",
        googleMapLink: "https://goo.gl/maps/stu139140141",
        province: "Thành phố Hà Nội",
        phone: "02438224555",
        name: "Phở Phú Gia",
        rating: 4.6,
        description: "Thưởng thức phở bò đặc sắc Hà Nội",
        openingHours: "6:00 - 22:00",
        id: 47,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-ngon-1.jpg",
          "nha-hang-ngon-2.jpg",
          "nha-hang-ngon-3.jpg"
        ],
        address: "19 Bùi Thị Xuân, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/vwx142143144",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839222344",
        name: "Nhà Hàng Ngon",
        rating: 4.7,
        description: "Ẩm thực ba miền trong không gian sang trọng",
        openingHours: "10:00 - 23:00",
        id: 48,
        averagePrice: 300000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "goi-ca-thanh-huong-1.jpg",
          "goi-ca-thanh-huong-2.jpg",
          "goi-ca-thanh-huong-3.jpg"
        ],
        address: "123 Nguyễn Văn Cừ, TP. Phan Thiết, Bình Thuận",
        googleMapLink: "https://goo.gl/maps/yz145146147",
        province: "Tỉnh Bình Thuận",
        phone: "02523888244",
        name: "Gỏi Cá Thanh Hương",
        rating: 4.8,
        description: "Món gỏi cá tươi ngon miền biển",
        openingHours: "9:00 - 21:00",
        id: 49,
        averagePrice: 250000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-bo-ba-toa-1.jpg",
          "lau-bo-ba-toa-2.jpg",
          "lau-bo-ba-toa-3.jpg"
        ],
        address: "1/29 Hoàng Diệu, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/abc148149150",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888388",
        name: "Lẩu Bò Ba Toa",
        rating: 4.9,
        description: "Lẩu bò nổi tiếng, thơm ngon",
        openingHours: "10:00 - 22:00",
        id: 50,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-bo-ganh-1.jpg",
          "bun-bo-ganh-2.jpg",
          "bun-bo-ganh-3.jpg"
        ],
        address: "28 Nguyễn Tri Phương, TP. Huế",
        googleMapLink: "https://goo.gl/maps/def151152153",
        province: "Thành phố Huế",
        phone: "02343888333",
        name: "Bún Bò Gánh",
        rating: 4.8,
        description: "Bún bò Huế nổi tiếng",
        openingHours: "7:00 - 21:00",
        id: 51,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-khot-goc-vu-sua-1.jpg",
          "banh-khot-goc-vu-sua-2.jpg",
          "banh-khot-goc-vu-sua-3.jpg"
        ],
        address: "14 Nguyễn Trường Tộ, TP. Vũng Tàu",
        googleMapLink: "https://goo.gl/maps/ghi154155156",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        phone: "02543888222",
        name: "Bánh Khọt Gốc Vú Sữa",
        rating: 4.9,
        description: "Bánh khọt đặc sản Vũng Tàu",
        openingHours: "8:00 - 21:00",
        id: 52,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-trang-cuon-mau-1.jpg",
          "banh-trang-cuon-mau-2.jpg",
          "banh-trang-cuon-mau-3.jpg"
        ],
        address: "93 Nguyễn Chí Thanh, Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/jkl157158159",
        province: "Thành phố Đà Nẵng",
        phone: "02363888244",
        name: "Bánh Tráng Cuốn Thịt Heo Mậu",
        rating: 4.7,
        description: "Bánh tráng cuốn thịt heo đậm đà",
        openingHours: "10:00 - 21:00",
        id: 53,
        averagePrice: 80000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nem-nuong-nha-trang-1.jpg",
          "nem-nuong-nha-trang-2.jpg",
          "nem-nuong-nha-trang-3.jpg"
        ],
        address: "16A Lãn Ông, Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/mno160161162",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888255",
        name: "Nem Nướng Nha Trang Đặng Văn Quyên",
        rating: 4.8,
        description: "Nem nướng truyền thống",
        openingHours: "10:00 - 21:00",
        id: 54,
        averagePrice: 60000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-doi-sao-1.jpg",
          "nha-hang-doi-sao-2.jpg",
          "nha-hang-doi-sao-3.jpg"
        ],
        address: "45 Trần Phú, TP. Hạ Long, Quảng Ninh",
        googleMapLink: "https://goo.gl/maps/pqr163164165",
        province: "Tỉnh Quảng Ninh",
        phone: "03338888333",
        name: "Nhà Hàng Đồi Sao",
        rating: 4.6,
        description: "Hải sản tươi sống, view biển",
        openingHours: "11:00 - 23:00",
        id: 55,
        averagePrice: 400000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "chao-luon-dong-1.jpg",
          "chao-luon-dong-2.jpg",
          "chao-luon-dong-3.jpg"
        ],
        address: "12 Võ Nguyên Giáp, TP. Vinh, Nghệ An",
        googleMapLink: "https://goo.gl/maps/stu166167168",
        province: "Tỉnh Nghệ An",
        phone: "02383888322",
        name: "Cháo Lươn Đồng",
        rating: 4.7,
        description: "Cháo lươn đặc sản Nghệ An",
        openingHours: "8:00 - 20:00",
        id: 56,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-cua-dong-co-ba-1.jpg",
          "lau-cua-dong-co-ba-2.jpg",
          "lau-cua-dong-co-ba-3.jpg"
        ],
        address: "27 Lê Văn Sỹ, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/vwx169170171",
        province: "Thành phố Hồ Chí Minh",
        phone: "02835122388",
        name: "Lẩu Cua Đồng Cô Ba",
        rating: 4.8,
        description: "Lẩu cua đồng hấp dẫn",
        openingHours: "10:00 - 22:00",
        id: 57,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-mi-bay-ho-1.jpg",
          "banh-mi-bay-ho-2.jpg",
          "banh-mi-bay-ho-3.jpg"
        ],
        address: "19 Huỳnh Khương Ninh, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/yz172173174",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839112333",
        name: "Bánh Mì Bảy Hổ",
        rating: 4.9,
        description: "Bánh mì truyền thống",
        openingHours: "6:00 - 21:00",
        id: 58,
        averagePrice: 25000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-tam-cali-1.jpg",
          "com-tam-cali-2.jpg",
          "com-tam-cali-3.jpg"
        ],
        address: "80 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/abc175176177",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839122255",
        name: "Cơm Tấm Cali",
        rating: 4.6,
        description: "Cơm tấm với nhiều lựa chọn topping",
        openingHours: "8:00 - 22:00",
        id: 59,
        averagePrice: 60000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "hai-san-tam-map-1.jpg",
          "hai-san-tam-map-2.jpg",
          "hai-san-tam-map-3.jpg"
        ],
        address: "21 Lê Quý Đôn, TP. Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/def178179180",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888322",
        name: "Hải Sản Tám Mập",
        rating: 4.7,
        description: "Hải sản tươi ngon, giá cả phải chăng",
        openingHours: "10:00 - 22:00",
        id: 60,
        averagePrice: 300000,
        type: "Quán hải sản"
      },
      {
        images: [
          "banh-xeo-tom-nhay-1.jpg",
          "banh-xeo-tom-nhay-2.jpg",
          "banh-xeo-tom-nhay-3.jpg"
        ],
        address: "53 Lê Lợi, TP. Quy Nhơn, Bình Định",
        googleMapLink: "https://goo.gl/maps/abc181182183",
        province: "Tỉnh Bình Định",
        phone: "02563888433",
        name: "Bánh Xèo Tôm Nhảy Cô Ba",
        rating: 4.7,
        description: "Món bánh xèo tôm nhảy đặc sản Quy Nhơn",
        openingHours: "10:00 - 21:00",
        id: 61,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-ca-ninh-hoa-1.jpg",
          "bun-ca-ninh-hoa-2.jpg",
          "bun-ca-ninh-hoa-3.jpg"
        ],
        address: "29 Phạm Văn Đồng, Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/def184185186",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888344",
        name: "Bún Cá Ninh Hòa",
        rating: 4.8,
        description: "Món bún cá đậm vị biển",
        openingHours: "7:00 - 21:00",
        id: 62,
        averagePrice: 35000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "ga-nuong-o-o-o-1.jpg",
          "ga-nuong-o-o-o-2.jpg",
          "ga-nuong-o-o-o-3.jpg"
        ],
        address: "18 Nguyễn Tri Phương, TP. Huế",
        googleMapLink: "https://goo.gl/maps/ghi187188189",
        province: "Thành phố Huế",
        phone: "02343888455",
        name: "Gà Nướng Ò Ó O",
        rating: 4.6,
        description: "Món gà nướng với nước sốt đặc biệt",
        openingHours: "10:00 - 22:00",
        id: 63,
        averagePrice: 150000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "pho-hai-thien-1.jpg",
          "pho-hai-thien-2.jpg",
          "pho-hai-thien-3.jpg"
        ],
        address: "82 Nguyễn Văn Cừ, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/jkl190191192",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839112344",
        name: "Phở Hai Thiền",
        rating: 4.8,
        description: "Quán phở bò nổi tiếng với nước dùng đậm đà",
        openingHours: "6:00 - 22:00",
        id: 64,
        averagePrice: 60000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-que-viet-1.jpg",
          "nha-hang-que-viet-2.jpg",
          "nha-hang-que-viet-3.jpg"
        ],
        address: "45 Võ Nguyên Giáp, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/mno193194195",
        province: "Thành phố Cần Thơ",
        phone: "02923888222",
        name: "Nhà Hàng Quê Việt",
        rating: 4.7,
        description: "Nhà hàng ẩm thực miền Tây với view sông",
        openingHours: "10:00 - 23:00",
        id: 65,
        averagePrice: 400000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "lau-ca-linh-1.jpg",
          "lau-ca-linh-2.jpg",
          "lau-ca-linh-3.jpg"
        ],
        address: "14 Nguyễn Trung Trực, TP. Long Xuyên, An Giang",
        googleMapLink: "https://goo.gl/maps/pqr196197198",
        province: "Tỉnh An Giang",
        phone: "02963888433",
        name: "Lẩu Cá Linh Bông Điên Điển",
        rating: 4.9,
        description: "Món lẩu cá đặc sản miền Tây",
        openingHours: "10:00 - 22:00",
        id: 66,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-ga-hai-nam-1.jpg",
          "com-ga-hai-nam-2.jpg",
          "com-ga-hai-nam-3.jpg"
        ],
        address: "12 Nguyễn Thái Học, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/stu199200201",
        province: "Thành phố Hồ Chí Minh",
        phone: "02836221122",
        name: "Cơm Gà Hải Nam",
        rating: 4.7,
        description: "Món cơm gà phong cách Singapore",
        openingHours: "9:00 - 21:00",
        id: 67,
        averagePrice: 80000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-mi-huynh-hoa-1.jpg",
          "banh-mi-huynh-hoa-2.jpg",
          "banh-mi-huynh-hoa-3.jpg"
        ],
        address: "26 Lê Thị Riêng, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/vwx202203204",
        province: "Thành phố Hồ Chí Minh",
        phone: "02838223344",
        name: "Bánh Mì Huỳnh Hoa",
        rating: 4.8,
        description: "Bánh mì Sài Gòn nổi tiếng",
        openingHours: "8:00 - 21:00",
        id: 68,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-nam-ashima-1.jpg",
          "lau-nam-ashima-2.jpg",
          "lau-nam-ashima-3.jpg"
        ],
        address: "182 Nguyễn Văn Trỗi, Quận Phú Nhuận, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/yz205206207",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839122388",
        name: "Lẩu Nấm Ashima",
        rating: 4.6,
        description: "Lẩu nấm với nhiều nguyên liệu độc đáo",
        openingHours: "10:00 - 22:00",
        id: 69,
        averagePrice: 300000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-dau-mam-tom-1.jpg",
          "bun-dau-mam-tom-2.jpg",
          "bun-dau-mam-tom-3.jpg"
        ],
        address: "68 Phan Đình Phùng, Hà Nội",
        googleMapLink: "https://goo.gl/maps/abc208209210",
        province: "Thành phố Hà Nội",
        phone: "02438224477",
        name: "Quán Bún Đậu Mắm Tôm Cô Khàn",
        rating: 4.7,
        description: "Bún đậu mắm tôm với hương vị Hà Nội",
        openingHours: "10:00 - 21:00",
        id: 70,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-am-thuc-viet-1.jpg",
          "nha-hang-am-thuc-viet-2.jpg",
          "nha-hang-am-thuc-viet-3.jpg"
        ],
        address: "35 Nguyễn Huệ, TP. Quy Nhơn, Bình Định",
        googleMapLink: "https://goo.gl/maps/def211212213",
        province: "Tỉnh Bình Định",
        phone: "02563888288",
        name: "Nhà Hàng Ẩm Thực Việt",
        rating: 4.6,
        description: "Nhà hàng chuyên các món Việt cao cấp",
        openingHours: "10:00 - 23:00",
        id: 71,
        averagePrice: 300000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "banh-canh-ghe-69-1.jpg",
          "banh-canh-ghe-69-2.jpg",
          "banh-canh-ghe-69-3.jpg"
        ],
        address: "69 Lê Hồng Phong, TP. Vũng Tàu",
        googleMapLink: "https://goo.gl/maps/ghi214215216",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        phone: "02543888255",
        name: "Bánh Canh Ghẹ 69",
        rating: 4.8,
        description: "Món bánh canh ghẹ đặc sản",
        openingHours: "8:00 - 21:00",
        id: 72,
        averagePrice: 60000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "pho-ly-quoc-su-1.jpg",
          "pho-ly-quoc-su-2.jpg",
          "pho-ly-quoc-su-3.jpg"
        ],
        address: "10 Lý Quốc Sư, Hà Nội",
        googleMapLink: "https://goo.gl/maps/jkl217218219",
        province: "Thành phố Hà Nội",
        phone: "02438225544",
        name: "Phở Số 10 Lý Quốc Sư",
        rating: 4.9,
        description: "Quán phở bò nổi tiếng Hà Nội",
        openingHours: "6:00 - 22:00",
        id: 73,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "hai-san-bien-dong-1.jpg",
          "hai-san-bien-dong-2.jpg",
          "hai-san-bien-dong-3.jpg"
        ],
        address: "21 Nguyễn Văn Linh, TP. Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/mno220221222",
        province: "Thành phố Đà Nẵng",
        phone: "02363888299",
        name: "Nhà Hàng Hải Sản Biển Đông",
        rating: 4.8,
        description: "Hải sản tươi sống với giá cả phải chăng",
        openingHours: "10:00 - 23:00",
        id: 74,
        averagePrice: 250000,
        type: "Quán hải sản"
      },
      {
        images: [
          "nem-chua-ran-ba-nga-1.jpg",
          "nem-chua-ran-ba-nga-2.jpg",
          "nem-chua-ran-ba-nga-3.jpg"
        ],
        address: "88 Hàng Cót, Hà Nội",
        googleMapLink: "https://goo.gl/maps/pqr223224225",
        province: "Thành phố Hà Nội",
        phone: "02438226655",
        name: "Nem Chua Rán Bà Ngà",
        rating: 4.7,
        description: "Nơi nổi tiếng với nem chua rán giòn rụm",
        openingHours: "15:00 - 21:00",
        id: 75,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-ga-ot-hiem-1.jpg",
          "lau-ga-ot-hiem-2.jpg",
          "lau-ga-ot-hiem-3.jpg"
        ],
        address: "109 Nguyễn Tri Phương, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/stu226227228",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839221166",
        name: "Lẩu Gà Ớt Hiểm 109",
        rating: 4.8,
        description: "Lẩu gà với nước dùng cay đặc biệt",
        openingHours: "10:00 - 22:00",
        id: 76,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-nieu-hai-san-1.jpg",
          "com-nieu-hai-san-2.jpg",
          "com-nieu-hai-san-3.jpg"
        ],
        address: "12 Trần Phú, TP. Phan Rang, Ninh Thuận",
        googleMapLink: "https://goo.gl/maps/vwx229230231",
        province: "Tỉnh Ninh Thuận",
        phone: "02523888211",
        name: "Cơm Niêu Hải Sản Biển",
        rating: 4.6,
        description: "Món cơm niêu với hải sản tươi ngon",
        openingHours: "10:00 - 21:00",
        id: 77,
        averagePrice: 300000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "bun-rieu-cua-oc-1.jpg",
          "bun-rieu-cua-oc-2.jpg",
          "bun-rieu-cua-oc-3.jpg"
        ],
        address: "30 Trần Phú, TP. Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/yz232233234",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888233",
        name: "Bún Riêu Cua Ốc",
        rating: 4.7,
        description: "Món bún riêu cua đặc sắc",
        openingHours: "7:00 - 21:00",
        id: 78,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-que-toi-1.jpg",
          "nha-hang-que-toi-2.jpg",
          "nha-hang-que-toi-3.jpg"
        ],
        address: "45 Nguyễn Huệ, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/abc235236237",
        province: "Thành phố Cần Thơ",
        phone: "02923888333",
        name: "Nhà Hàng Ẩm Thực Quê Tôi",
        rating: 4.7,
        description: "Nhà hàng với các món miền Tây",
        openingHours: "10:00 - 22:00",
        id: 79,
        averagePrice: 250000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "banh-trang-nuong-co-nam-1.jpg",
          "banh-trang-nuong-co-nam-2.jpg",
          "banh-trang-nuong-co-nam-3.jpg"
        ],
        address: "28 Lê Lợi, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/def238239240",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888244",
        name: "Bánh Tráng Nướng Cô Năm",
        rating: 4.8,
        description: "Món bánh tráng nướng thơm ngon",
        openingHours: "15:00 - 22:00",
        id: 80,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-can-co-le-1.jpg",
          "banh-can-co-le-2.jpg",
          "banh-can-co-le-3.jpg"
        ],
        address: "29 Nguyễn Biểu, TP. Nha Trang, Khánh Hòa",
        googleMapLink: "https://goo.gl/maps/abc241242243",
        province: "Tỉnh Khánh Hòa",
        phone: "02583888288",
        name: "Bánh Căn Cô Lệ",
        rating: 4.7,
        description: "Món bánh căn đặc sản miền Trung",
        openingHours: "7:00 - 21:00",
        id: 81,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-tam-kieu-giang-1.jpg",
          "com-tam-kieu-giang-2.jpg",
          "com-tam-kieu-giang-3.jpg"
        ],
        address: "17 Trần Quang Diệu, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/def244245246",
        province: "Thành phố Hồ Chí Minh",
        phone: "02836223388",
        name: "Cơm Tấm Kiều Giang",
        rating: 4.6,
        description: "Món cơm tấm nổi tiếng với sườn nướng thơm ngon",
        openingHours: "8:00 - 22:00",
        id: 82,
        averagePrice: 50000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "chao-long-tien-phat-1.jpg",
          "chao-long-tien-phat-2.jpg",
          "chao-long-tien-phat-3.jpg"
        ],
        address: "12 Hùng Vương, TP. Huế",
        googleMapLink: "https://goo.gl/maps/ghi247248249",
        province: "Thành phố Huế",
        phone: "02343888333",
        name: "Cháo Lòng Tiến Phát",
        rating: 4.5,
        description: "Món cháo lòng truyền thống với hương vị đậm đà",
        openingHours: "6:00 - 20:00",
        id: 83,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-ga-la-giang-1.jpg",
          "lau-ga-la-giang-2.jpg",
          "lau-ga-la-giang-3.jpg"
        ],
        address: "18 Nguyễn Văn Trỗi, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/jkl250251252",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839122333",
        name: "Lẩu Gà Lá Giang",
        rating: 4.8,
        description: "Lẩu gà lá giang đậm vị chua cay",
        openingHours: "10:00 - 22:00",
        id: 84,
        averagePrice: 200000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nem-lui-kim-long-1.jpg",
          "nem-lui-kim-long-2.jpg",
          "nem-lui-kim-long-3.jpg"
        ],
        address: "35 Nguyễn Hoàng, TP. Huế",
        googleMapLink: "https://goo.gl/maps/mno253254255",
        province: "Thành phố Huế",
        phone: "02343888255",
        name: "Nem Lụi Kim Long",
        rating: 4.7,
        description: "Món nem lụi nổi tiếng vùng Kim Long",
        openingHours: "9:00 - 21:00",
        id: 85,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "banh-mi-co-ba-1.jpg",
          "banh-mi-co-ba-2.jpg",
          "banh-mi-co-ba-3.jpg"
        ],
        address: "45 Nguyễn Huệ, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/pqr256257258",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888233",
        name: "Bánh Mì Cô Ba",
        rating: 4.6,
        description: "Bánh mì truyền thống với nhân đa dạng",
        openingHours: "7:00 - 20:00",
        id: 86,
        averagePrice: 20000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "lau-ca-duoi-hoang-gia-1.jpg",
          "lau-ca-duoi-hoang-gia-2.jpg",
          "lau-ca-duoi-hoang-gia-3.jpg"
        ],
        address: "23 Trương Công Định, TP. Vũng Tàu",
        googleMapLink: "https://goo.gl/maps/stu259260261",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        phone: "02543888333",
        name: "Lẩu Cá Đuối Hoàng Gia",
        rating: 4.9,
        description: "Lẩu cá đuối đặc sản Vũng Tàu",
        openingHours: "10:00 - 22:00",
        id: 87,
        averagePrice: 250000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "com-chay-bo-de-1.jpg",
          "com-chay-bo-de-2.jpg",
          "com-chay-bo-de-3.jpg"
        ],
        address: "72 Lê Hồng Phong, TP. Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/vwx262263264",
        province: "Thành phố Đà Nẵng",
        phone: "02363888388",
        name: "Cơm Chay Bồ Đề",
        rating: 4.8,
        description: "Món cơm chay với nhiều món đa dạng",
        openingHours: "9:00 - 21:00",
        id: 88,
        averagePrice: 50000,
        type: "Quán chay"
      },
      {
        images: [
          "bun-ca-chau-doc-1.jpg",
          "bun-ca-chau-doc-2.jpg",
          "bun-ca-chau-doc-3.jpg"
        ],
        address: "32 Lê Lợi, TP. Châu Đốc, An Giang",
        googleMapLink: "https://goo.gl/maps/yz265266267",
        province: "Tỉnh An Giang",
        phone: "02963888344",
        name: "Bún Cá Châu Đốc",
        rating: 4.7,
        description: "Bún cá đặc sản Châu Đốc",
        openingHours: "7:00 - 20:00",
        id: 89,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-loc-vung-1.jpg",
          "nha-hang-loc-vung-2.jpg",
          "nha-hang-loc-vung-3.jpg"
        ],
        address: "88 Nguyễn Văn Cừ, TP. Cần Thơ",
        googleMapLink: "https://goo.gl/maps/abc268269270",
        province: "Thành phố Cần Thơ",
        phone: "02923888322",
        name: "Nhà Hàng Lộc Vừng",
        rating: 4.8,
        description: "Nhà hàng ven sông với view đẹp",
        openingHours: "10:00 - 22:00",
        id: 90,
        averagePrice: 350000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "bun-mam-ba-ut-1.jpg",
          "bun-mam-ba-ut-2.jpg",
          "bun-mam-ba-ut-3.jpg"
        ],
        address: "15 Võ Văn Kiệt, TP. Mỹ Tho, Tiền Giang",
        googleMapLink: "https://goo.gl/maps/def271272273",
        province: "Tỉnh Tiền Giang",
        phone: "02733888244",
        name: "Quán Bún Mắm Bà Út",
        rating: 4.5,
        description: "Món bún mắm đậm đà miền Tây",
        openingHours: "8:00 - 21:00",
        id: 91,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "hai-san-thang-loi-1.jpg",
          "hai-san-thang-loi-2.jpg",
          "hai-san-thang-loi-3.jpg"
        ],
        address: "24 Trần Phú, TP. Hạ Long, Quảng Ninh",
        googleMapLink: "https://goo.gl/maps/ghi274275276",
        province: "Tỉnh Quảng Ninh",
        phone: "03338888311",
        name: "Hải Sản Thắng Lợi",
        rating: 4.7,
        description: "Hải sản tươi sống, chế biến đa dạng",
        openingHours: "10:00 - 22:00",
        id: 92,
        averagePrice: 400000,
        type: "Quán hải sản"
      },
      {
        images: [
          "lau-thai-tom-yum-1.jpg",
          "lau-thai-tom-yum-2.jpg",
          "lau-thai-tom-yum-3.jpg"
        ],
        address: "12 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/jkl277278279",
        province: "Thành phố Hồ Chí Minh",
        phone: "02835122355",
        name: "Lẩu Thái Tom Yum",
        rating: 4.6,
        description: "Lẩu thái chua cay đậm chất Thái Lan",
        openingHours: "10:00 - 22:00",
        id: 93,
        averagePrice: 250000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "nha-hang-phong-cach-viet-1.jpg",
          "nha-hang-phong-cach-viet-2.jpg",
          "nha-hang-phong-cach-viet-3.jpg"
        ],
        address: "30 Võ Nguyên Giáp, TP. Quy Nhơn, Bình Định",
        googleMapLink: "https://goo.gl/maps/mno280281282",
        province: "Tỉnh Bình Định",
        phone: "02563888299",
        name: "Nhà Hàng Phong Cách Việt",
        rating: 4.7,
        description: "Nhà hàng với các món ăn dân dã",
        openingHours: "10:00 - 23:00",
        id: 94,
        averagePrice: 350000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "banh-can-da-lat-1.jpg",
          "banh-can-da-lat-2.jpg",
          "banh-can-da-lat-3.jpg"
        ],
        address: "22 Trần Hưng Đạo, TP. Đà Lạt, Lâm Đồng",
        googleMapLink: "https://goo.gl/maps/pqr283284285",
        province: "Tỉnh Lâm Đồng",
        phone: "02633888377",
        name: "Bánh Căn Đà Lạt",
        rating: 4.8,
        description: "Món bánh căn giòn tan, thơm ngon",
        openingHours: "7:00 - 20:00",
        id: 95,
        averagePrice: 30000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "bun-bo-hue-o-hoa-1.jpg",
          "bun-bo-hue-o-hoa-2.jpg",
          "bun-bo-hue-o-hoa-3.jpg"
        ],
        address: "18 Lê Lợi, TP. Huế",
        googleMapLink: "https://goo.gl/maps/stu286287288",
        province: "Thành phố Huế",
        phone: "02343888311",
        name: "Bún Bò Huế O Hoa",
        rating: 4.9,
        description: "Bún bò Huế chuẩn vị miền Trung",
        openingHours: "6:00 - 21:00",
        id: 96,
        averagePrice: 40000,
        type: "Quán ăn gia đình"
      },
      {
        images: [
          "oc-co-ba-sai-gon-1.jpg",
          "oc-co-ba-sai-gon-2.jpg",
          "oc-co-ba-sai-gon-3.jpg"
        ],
        address: "33 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh",
        googleMapLink: "https://goo.gl/maps/vwx289290291",
        province: "Thành phố Hồ Chí Minh",
        phone: "02839122377",
        name: "Ốc Cô Ba Sài Gòn",
        rating: 4.7,
        description: "Quán ốc phong cách hiện đại",
        openingHours: "15:00 - 22:00",
        id: 97,
        averagePrice: 150000,
        type: "Quán hải sản"
      },
      {
        images: [
          "nha-hang-hai-yen-1.jpg",
          "nha-hang-hai-yen-2.jpg",
          "nha-hang-hai-yen-3.jpg"
        ],
        address: "40 Nguyễn Huệ, TP. Phan Thiết, Bình Thuận",
        googleMapLink: "https://goo.gl/maps/yz292293294",
        province: "Tỉnh Bình Thuận",
        phone: "02523888355",
        name: "Nhà Hàng Hải Yến",
        rating: 4.8,
        description: "Nhà hàng hải sản với view biển đẹp",
        openingHours: "11:00 - 23:00",
        id: 98,
        averagePrice: 450000,
        type: "Nhà hàng sang trọng"
      },
      {
        images: [
          "quan-nuong-sumo-bbq-1.jpg",
          "quan-nuong-sumo-bbq-2.jpg",
          "quan-nuong-sumo-bbq-3.jpg"
        ],
        address: "88 Nguyễn Tri Phương, TP. Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/abc295296297",
        province: "Thành phố Đà Nẵng",
        phone: "02363888366",
        name: "Quán Nướng Sumo BBQ",
        rating: 4.7,
        description: "Quán nướng BBQ phong cách Nhật",
        openingHours: "11:00 - 22:00",
        id: 99,
        averagePrice: 300000,
        type: "Quán nướng BBQ"
      },
      {
        images: [],
        address: "19 Nguyễn Hoàng, TP. Đà Nẵng",
        googleMapLink: "https://goo.gl/maps/def298299300",
        province: "Thành phố Đà Nẵng",
        phone: "02363888233",
        name: "Bánh Tráng Cuốn Thịt Heo Đại Lộc",
        rating: 4.8,
        description: "Món bánh tráng cuốn thịt heo nổi tiếng",
        openingHours: "10:00 - 21:00",
        id: 100,
        averagePrice: 80000,
        type: "Quán ăn gia đình"
      }

  ]
  
  const comments = [
    { id: 1, quanAnId: 1, user: "Nguyễn Văn A", text: "Phở rất ngon!", date: "2025-02-05 10:00" },
    { id: 2, quanAnId: 2, user: "Trần Văn B", text: "Bún chả tuyệt vời!", date: "2025-02-06 12:00" },
    // ...other comments...
  ];
  
  const tinhThanh = [
    { MaTinhThanh: 1, TenTinhThanh: "Hà Nội" },
    { MaTinhThanh: 79, TenTinhThanh: "TP. Hồ Chí Minh" },
    { MaTinhThanh: 46, TenTinhThanh: "Huế" },
    { MaTinhThanh: 48, TenTinhThanh: "Đà Nẵng" },
    { MaTinhThanh: 92, TenTinhThanh: "Cần Thơ" },
  ];
  


  export default {
    danhGia,
    danhSachQuanAn,
   
    loaiQuan,
    nguoiDung,
    tinhThanh,
    comments
  };