import logo from './logo.svg';
import './App.css';
import {Button, Dropdown, Form, Table, Popup, Label, Radio, Rating, Image, Grid} from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from 'axios';

const options = [
  { key: 1, text: 'Thứ hai', value: 'Thứ hai' },
  { key: 2, text: 'Thứ ba', value: 'Thứ ba' },
  { key: 3, text: 'Thứ tư', value: 'Thứ tư' },
  { key: 4, text: 'Thứ năm', value: 'Thứ năm' },
  { key: 5, text: 'Thứ sáu', value: 'Thứ sáu' },
  { key: 6, text: 'Thứ bảy', value: 'Thứ bảy' },
  { key: 7, text: 'Chủ nhật', value: 'Chủ nhật' },
]

const DSstarWars = [
  {name: "Anakin", gender: "Male", species: "Human", lightsaber: "Lightsater Violet", anh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84d44311-4aa5-472d-b391-42b113229ca0/dawkfge-ac556751-5b05-48bb-9ccb-0e37a5d798bb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZDQ0MzExLTRhYTUtNDcyZC1iMzkxLTQyYjExMzIyOWNhMFwvZGF3a2ZnZS1hYzU1Njc1MS01YjA1LTQ4YmItOWNjYi0wZTM3YTVkNzk4YmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ph_pKPLrwOITNwiV7GqVlBa77Z1irVe7mjR9CjdQzqY"}, 
  {name: "Padme", gender: "Felame", species: "Human", lightsaber: "Lightsater Violet & Green", anh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fe94b7-e8a3-40cd-8392-4f479050f28b/de1kpq6-15eddea0-ad68-499a-bd37-13a34795bdc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1ZmU5NGI3LWU4YTMtNDBjZC04MzkyLTRmNDc5MDUwZjI4YlwvZGUxa3BxNi0xNWVkZGVhMC1hZDY4LTQ5OWEtYmQzNy0xM2EzNDc5NWJkYzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UWcvBRkDsjBkcGstONc9yYCXJjWqJJQcPH6rIwRWMAc"}, 
  {name: "Talon", gender: "Felame", species: "Twi'lek", lightsaber: "Lightsater Red", anh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ddf58d4-2019-40b6-a766-8573e5e77c9e/d1s3jfz-4050a79f-a9b1-4fd0-99ed-d16d5d720178.jpg/v1/fill/w_600,h_596,q_75,strp/talon_unleashed_by_rocketraygun_d1s3jfz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk2IiwicGF0aCI6IlwvZlwvNmRkZjU4ZDQtMjAxOS00MGI2LWE3NjYtODU3M2U1ZTc3YzllXC9kMXMzamZ6LTQwNTBhNzlmLWE5YjEtNGZkMC05OWVkLWQxNmQ1ZDcyMDE3OC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5PNKTm78rRIc-PBKAoCOkFDZCk7UH_weKC8slXft_Rk"}
]

class App extends Component {
  state = {
    themChuMoi:[{}],
    timRaSoArray:'',

    ngayAdd:'',
    tenAdd:'',
    lamGiAdd:'',
    diemAdd:'',
    TFAdd:'',

    ketQuaBaoNhieuBai:'',
    timNgay:'',
    tatCaBaiHoc:'',

    kqNgay:'',
    ketQuaDaTimBaiTap:[],
    ketQuaKhongTimBaiTap:'',

    bangNgayBaiTap:'',

    lichNgay:[],
    diemTrungBinh:'',
    timDiemCao:'',
    timDiemThap:'',

    so1:'', 
    so2:'', 
    ketQuaPhepTinh:'',
    danhSachStarWars:[],
    danhSachStarWars2:[],
    danhSachStarWars3:'', // không liên quan mongoDB

    kichThuoc: 'tiny',
    
  }

  componentDidMount(){
    axios.get('http://localhost:5500/baiHoc/starWars2?nameStarWars=all')

    .then(res => {
      if(res.data==='Không kết nối với MongoDB'){
        this.setState({coLoi: res.data});
      }
      else{
        this.setState({danhSachStarWars2: res.data});
      }
    })
  }

  
  
  xemLichHoc = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/tatCaBaiTap')
    .then(res => {
      this.setState({lichNgay: res.data.tatCaSoArray});
    })
  }

  diemTrungBinh = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/diemTrungBinh')
    .then(res => {
      this.setState({diemTrungBinh: res.data.tinhDiem});
    })
  }

  timDiemCao = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/timDiemCao')
    .then(res => {
      this.setState({timDiemCao: res.data.soDiemCaoNhat});
    })
  }
  
  timDiemThap = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/timDiemThap')
    .then(res => {
      this.setState({timDiemThap: res.data.soDiemThapNhat});
    })
  }


  

  onChangeTimNgayBaiTap = (e, { value }) => {
    this.setState({timNgay: value})
  } 
  timBaiTapVaoThuMay = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/baiTap?ngay='+this.state.timNgay)
    .then(res => {
      this.setState({ketQuaDaTimBaiTap: res.data.ketQuaDaTimBaiTap});
      this.setState({kqNgay: res.data.kqNgay});
    })
  }


  onChangeThemNgayMoi = (e, { value }) => {
    this.setState({ngayAdd: value})
  }
  onChangeThemTenMoi = (e, { value }) => {
    this.setState({tenAdd: value})
  }
  onChangeThemLamGiMoi = (e, { value }) => {
    this.setState({lamGiAdd: value})
  }
  onChangeThemDiemMoi = (e, { value }) => {
    this.setState({diemAdd: value})
  }
  
  
  onChangeTrueFalse = (e, { value }) => this.setState({ lamXongChua:value })
  
  themTenMoi = (e, { value }) => {
  //   axios.get('http://localhost:5500/baiHoc/baiTap/themChuMoi?ngayMoi=' +this.state.ngayAdd+'&tenMoi='+this.state.tenAdd+'&lamGiMoi='+this.state.lamGiAdd+'&diemMoi='+this.state.diemAdd+'&TrueFalse='+this.state.lamXongChua)
  //   .then(res => {
  //     this.setState({themChuMoi: res.data.ketQuaChuMoi});
  //     this.setState({ngayAdd:''});
  //     this.setState({tenAdd:''});
  //     this.setState({lamGiAdd:''});
  //     this.setState({diemAdd:''});
  //     this.setState({lamXongChua:''});

  //     this.setState({ketQuaBaoNhieuBai: res.data.ketQuaBaoNhieuBai});
  //     // this.setState({themChuMoi: res.data});
  //   })
  // }
  
    let baiTapMoi = {
      ngay: this.state.ngayAdd, 
      ten: this.state.tenAdd, 
      lamGi: this.state.lamGiAdd, 
      diem: this.state.diemAdd, 
      LXC: this.state.lamXongChua
    }

    // if(Number(this.state.diemAdd)===parseInt(Number(this.state.diemAdd), 0)){
      


    if(isNaN(this.state.diemAdd)){
      alert('Điểm không phải là số mà là chữ, viết lại đi')
    }else{
      axios.post('http://localhost:5500/baiHoc/baiTap', baiTapMoi)
      .then(res => {
        this.setState({themChuMoi: res.data.ketQuaChuMoi});
        this.setState({ngayAdd:''});
        this.setState({tenAdd:''});
        this.setState({lamGiAdd:''});
        this.setState({diemAdd:''});
        this.setState({lamXongChua:''});
        this.setState({ketQuaBaoNhieuBai: res.data.ketQuaBaoNhieuBai});
      })
    }


  }
  


  onChangeSoArray = (e, { value }) => {
    this.setState({soArray: value})
  }
  TimSoArray = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/baiTap?soArray='+this.state.soArray)
    .then(res => {
      this.setState({timRaSoArray: res.data.ketQuaSoArray});
      this.setState({soArray: ''});
    })
  }




  onChangeTimSo1 = (e, { value }) => {
    this.setState({so1: value})
  }
  onChangeTimSo2 = (e, { value }) => {
    this.setState({so2: value})
  }
  tinhTong = () => {
    axios.get('http://localhost:5500/baiHoc/cong?so1='+this.state.so1+'&so2='+this.state.so2)
    .then(res => {
      // alert(res.data.ketQua)
      this.setState({ketQuaPhepTinh: res.data.ketQua});
      this.setState({so1:''});
      this.setState({so2:''});
    })
    .catch(err => {
      // alert(err)
      console.log(err)
    })
  }
  tinhHieu = () => {
    axios.get('http://localhost:5500/baiHoc/tru?so1='+this.state.so1+'&so2='+this.state.so2)
    .then(res => {
      // alert(res.data.ketQua)
      this.setState({ketQuaPhepTinh: res.data.ketQua});
      this.setState({so1:''});
      this.setState({so2:''});
    })
    .catch(err => {
      // alert(err)
      console.log(err)
    })
  }
  tinhtich = () => {
    axios.get('http://localhost:5500/baiHoc/nhan?so1='+this.state.so1+'&so2='+this.state.so2)
    .then(res => {
      // alert(res.data.ketQua)
      this.setState({ketQuaPhepTinh: res.data.ketQua});
      this.setState({so1:''});
      this.setState({so2:''});
    })
    .catch(err => {
      // alert(err)
      console.log(err)
    })
  }
  tinhThuong = () => {
    axios.get('http://localhost:5500/baiHoc/chia?so1='+this.state.so1+'&so2='+this.state.so2)
    .then(res => {
      // alert(res.data.ketQua)
      this.setState({ketQuaPhepTinh: res.data.ketQua});
      this.setState({so1:''});
      this.setState({so2:''});
    })
    .catch(err => {
      // alert(err)
      console.log(err)
    })
  }
  
  xemLichHoc = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/tatCaBaiTap')
    .then(res => {
      this.setState({lichNgay: res.data.tatCaSoArray});
    })
  }
  
  timDanhSachStarWars1 = (e, { value }) => {
    this.setState({
      danhSachStarWars:DSstarWars
    });
    
    for(var i=0; i<DSstarWars.length; i++)
    {
      axios.get('http://localhost:5500/baiHoc/starWars?name='+DSstarWars[i].name+'&gender='+DSstarWars[i].gender+'&species='+DSstarWars[i].species+'&lightsaber='+DSstarWars[i].lightsaber)
    }
  }
  giauDanhSachStarWars1 = (e, { value }) => {
    this.setState({
      danhSachStarWars:[]
    });
  }

  timDanhSachStarWars2 = (e, { value }) => {
    axios.get('http://localhost:5500/baiHoc/starWars3?nameStarWars=all')
    
    .then(res => {
      if(res.data==='Không kết nối với MongoDB'){
        this.setState({coLoi: res.data});
      }
      else{
        this.setState({danhSachStarWars3: res.data});
      }
    })
  }
  giauDanhSachStarWars2 = (e, { value }) => {
    this.setState({danhSachStarWars3:''});
  }


  xoaDanhSachStarWars = (id, index) => {
    var r = window.confirm("Có xóa không?");
    if(r === true){
      axios.delete('http://localhost:5500/baiHoc/starWars/'+id)
      .then(res => {
        alert(res.data)
      })
    }
  }
  themDanhSachStarWars = (e, { value }) => {
    var starWarsMoi = {
                      name: this.state.Name,
                    }
    axios.post('http://localhost:5500/baiHoc/starWars', starWarsMoi)
    .then(res => {
      alert(res.data)
    })
  }
  suaDanhSachStarWars = (id, index) => {
    var starWarsSua = {
                      name: this.state.Name,
                    }
    axios.put('http://localhost:5500/baiHoc/starWars/'+this.state.Id, starWarsSua)
    .then(res => {
      alert(res.data)
    })
  }




  render() {
    const { themChuMoi, timRaSoArray, ketQuaBaoNhieuBai, lichNgay, ketQuaPhepTinh, danhSachStarWars, danhSachStarWars2, kichThuoc, danhSachStarWars3,
      ketQuaDaTimBaiTap, kqNgay, diemTrungBinh, timDiemCao, timDiemThap } = this.state

    return (
      <div className="App">

        so 1 
        <Form>
          <Form.Input inline
          value={this.state.so1}
          onChange={this.onChangeTimSo1}
          />
        </Form>
        so 2 
        <Form>
          <Form.Input inline
          value={this.state.so2}
          onChange={this.onChangeTimSo2}
          />
        </Form>
        <br/>
        <Button onClick={this.tinhTong}>+</Button>
        <Button onClick={this.tinhHieu}>-</Button>
        <Button onClick={this.tinhtich}>*</Button>
        <Button onClick={this.tinhThuong}>/</Button>
        <br/><br/>
        {ketQuaPhepTinh}



        <br/><br/><br/><br/>
        <Form>
          Ngày
          <br/>
          <Dropdown
            search
            selection
            options={options}
            placeholder='Choose an option'
            value={this.state.ngayAdd}
            onChange={this.onChangeThemNgayMoi}
          />
          <br/><br/>
          Tên
          <Form.Input inline
          value={this.state.tenAdd}
          onChange={this.onChangeThemTenMoi}
          />
          Làm gì
          <Form.Input inline
          value={this.state.lamGiAdd}
          onChange={this.onChangeThemLamGiMoi}
          />
          Điểm
          <Form.Input inline
          value={this.state.diemAdd}
          onChange={this.onChangeThemDiemMoi}
          />


        <Form.Field>
          <Radio
            label='Làm xong bài'
            name='radioGroup'
            value='Làm xong bài'
            checked={this.state.lamXongChua === 'Làm xong bài'}
            onChange={this.onChangeTrueFalse}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Chưa làm xong bài'
            name='radioGroup'
            value='Chưa làm xong bài'
            checked={this.state.lamXongChua === 'Chưa làm xong bài'}
            onChange={this.onChangeTrueFalse}
          />
        </Form.Field>
        <Form.Field>
          <b>{this.state.lamXongChua}</b>
        </Form.Field>
        




        </Form>
        <br/>
        <Button onClick={this.themTenMoi}>Add</Button>
        <br/><br/>
        
        {/* {themChuMoi[themChuMoi.length-1].day} */}
        {/* {themChuMoi.ketQuaChuNgayMoi} */}
        Đã thêm ngày mới: {themChuMoi.day}
        <br/>
        {/* {themChuMoi[themChuMoi.length-1].taoRa} */}
        {/* {themChuMoi.ketQuaChuTenMoi} */}
        Đã thêm tên mới mà đã tạo: {themChuMoi.taoRa}
        <br/>
        {/* {themChuMoi[themChuMoi.length-1].lamGi} */}
        {/* {themChuMoi.ketQuaChuLamGiMoiMoi} */}
        Đã tạo bài tập mới: {themChuMoi.lamGi}
        <br/>
        {themChuMoi.lamXongCHua}
        <br/>

        Đã có {ketQuaBaoNhieuBai} Bài tập
        <br/>
        

        <br/><br/>

        <Form>
          <Form.Input inline
          value={this.state.soArray}
          onChange={this.onChangeSoArray}
          />
        </Form>
        <br/>
        <Button onClick={this.TimSoArray}>Số Array</Button>
        <br/><br/>
        {timRaSoArray.day}
        <br/>
        {timRaSoArray.taoRa}
        <br/>
        {timRaSoArray.lamGi}
        <br/>
        {timRaSoArray.lamXongCHua}
        <br/>
        {timRaSoArray.diemAdd}

        <br/><br/>

        {lichNgay.length===0
          ? null
          :
          <div>
            <Table celled textAlign='center'>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Ngày</Table.HeaderCell>
                  {options.map((moiTenNgay, index)=>
                    <Table.HeaderCell>{moiTenNgay.value}</Table.HeaderCell>
                  )}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell><b>Tạo</b></Table.Cell>
                  {options.map((moiTenNgay, index)=>
                    <Table.Cell>
                      <div>
                        {
                          lichNgay.map((moiNgay, index)=>
                          <div>
                            {moiNgay.day===moiTenNgay.value
                              ?
                                <div>
                                  <Popup on='click' trigger={<Label basic color={moiNgay.lamXongCHua ? 'blue' : 'red' } content={moiNgay.taoRa} />}>

                                    <Popup.Content>
                                      <div>Tạo ra: {moiNgay.taoRa}</div>
                                      <div>Làm gì: {moiNgay.lamGi}</div>
                                      <div>Điểm: {moiNgay.diem}/100</div>
                                      {moiNgay.lamXongCHua === true ?'Bài làm xong' :'Bài chưa xong'}
                                    </Popup.Content>

                                  </Popup>
                                  <br/><br/>
                                </div>
                              : null
                            }
                          </div>
                        )}
                      </div>
                    </Table.Cell>
                  )}
                </Table.Row>
              </Table.Body>

            </Table>
          </div>
        }
        <br/><br/>
        <Button onClick={this.xemLichHoc}>Lịch Học</Button>
        <br/><br/>
        
        {diemTrungBinh==''
          ?null
          :diemTrungBinh==100
            ? <div><p style={{color:'purple'}}>{diemTrungBinh} Tốt nhất</p>
              <Rating icon='star' rating={5} maxRating={5} disabled /></div>
            : diemTrungBinh>=80 && diemTrungBinh<100
              ? <div><p style={{color:'blue'}}>{diemTrungBinh} Tốt</p>
                <Rating icon='star' rating={4} maxRating={5} disabled /></div>
              : diemTrungBinh>=60 && diemTrungBinh<80
                ? <div><p style={{color:'green'}}>{diemTrungBinh} Khá</p>
                  <Rating on='star' rating={3} maxRating={5} disabled /></div>
                : diemTrungBinh>=40 && diemTrungBinh<60
                  ? <div><p style={{color:'orange'}}>{diemTrungBinh} Trung bình</p>
                    <Rating icon='star' rating={2} maxRating={5} disabled /></div>
                  : diemTrungBinh>=0 && diemTrungBinh<40
                  ? <div><p style={{color:'red'}}>{diemTrungBinh} Kém</p>
                    <Rating icon='star' rating={1} maxRating={5} disabled /></div>
                  : 'Quá 100 điểm và không có điểm nào.'
        }
        <Button onClick={this.diemTrungBinh}>Điểm Trung Bình</Button>

        <br/><br/>
        {timDiemCao}
        <br/><br/>
        <Button onClick={this.timDiemCao}>tìm điểm cao nhất</Button>

        <br/><br/>
        {timDiemThap}
        <br/><br/>
        <Button onClick={this.timDiemThap}>tìm điểm thấp nhất</Button>

        <br/><br/>
        <Form>
          Ngày
          <br/>
          <Dropdown
            search
            selection
            options={options}
            placeholder='Choose an option'
            value={this.state.timNgay}
            onChange={this.onChangeTimNgayBaiTap}
          />
        </Form>
        <br/>
        <Button onClick={this.timBaiTapVaoThuMay}>Tìm bài tập trong ngày nào</Button>
        <br/><br/>
        
        {ketQuaDaTimBaiTap.length === 0
          ? kqNgay+' không có bài tập nào'
          :
          <div>
            <div>{kqNgay} có {ketQuaDaTimBaiTap.length} bài tập</div>
            {ketQuaDaTimBaiTap.map((moiKetQuaDaTimBaiTap, index)=>
              <div>
                {index+1} {moiKetQuaDaTimBaiTap.taoRa} | {moiKetQuaDaTimBaiTap.lamGi} | {moiKetQuaDaTimBaiTap.lamXongCHua}
              </div>
            )}
          </div>
        }

        <br/><br/><br/><br/>
        
        {/* <Button onClick={this.timDanhSachStarWars2}>ABCDEF</Button> */}
        <br/>
        <Button onClick={this.xoaDanhSachStarWars}>xóa danh sach Star Wars</Button>
        <Button onClick={this.themDanhSachStarWars}>thêm danh sach Star Wars</Button>
        <Button onClick={this.suaDanhSachStarWars}>sửa danh sach Star Wars</Button>
        <br/>
        <Button onClick={this.timDanhSachStarWars1}>tìm danh sach Star Wars 1</Button>
        <Button onClick={this.giauDanhSachStarWars1}>giấu danh sach Star Wars 1</Button>
        <br/>
        <Button onClick={this.timDanhSachStarWars2}>tìm danh sach Star Wars 2 không mongoDB</Button>
        <Button onClick={this.giauDanhSachStarWars2}>giấu danh sach Star Wars 2 không mongoDB</Button>
        <br/><br/>
        {danhSachStarWars.map((moiNguoi, index)=>
          <div>
          {index+1} | Name: {moiNguoi.name} | Gender: {moiNguoi.gender} | Species: {moiNguoi.species} 
                    | Color Lightsaber: {moiNguoi.lightsaber}  | <Image src={moiNguoi.anh} />
          </div>
        )}
        <br/><br/>
        
        {danhSachStarWars2.length}


{danhSachStarWars2
  ?
  <Grid doubling columns='5'>
      {danhSachStarWars2.map((moiStarWars, index)=>
        <Grid.Column>
          <Popup on='click' trigger={
            <div>
              <Image src={moiStarWars.anh} size={kichThuoc} ></Image>
              <br/>
              <b>{moiStarWars.name}</b>
            </div>
          } wide='very' >
            <Grid>
              <Grid.Column textAlign='center' width={8}>
                <Image src={moiStarWars.anh} size='big' ></Image>
              </Grid.Column>
              <Grid.Column textAlign='center' width={8}>
                <b>Name: {moiStarWars.name}</b>
                <br/>
                <b>Lightsaber: {moiStarWars.lightsaber}</b>
                <br/>
                <b>Gender: {moiStarWars.gender}</b>
                <br/>
                <b>Species: {moiStarWars.species}</b>
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid.Column>
      )}
    </Grid>
  :null
}


        <br/><br/>

        {danhSachStarWars3}


        <br/><br/>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


      </div>
    );
  }




}

export default App;
