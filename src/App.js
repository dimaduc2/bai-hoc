import logo from './logo.svg';
import './App.css';
import {Button, Dropdown, Form, Table, Popup, Label, Radio, Rating} from 'semantic-ui-react'
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
    axios.get('http://localhost:5500/baiHoc/baiTap/timBaiTap?ngay='+this.state.timNgay)
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
      axios.post('http://localhost:5500/baiHoc/baiTap/themChuMoi', baiTapMoi)
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


  render() {
    const { themChuMoi, timRaSoArray, tatCaBaiHoc, ketQuaBaoNhieuBai, lichNgay,
      ketQuaDaTimBaiTap, kqNgay, TFAdd, diemTrungBinh, timDiemCao, timDiemThap } = this.state

    return (
      <div className="App">

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
