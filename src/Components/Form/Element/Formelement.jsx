import React from "react";

 export default class FormElement extends React.Component{
    render() {
        return (
        <form> 
            <label>
            Nama: <input type="text" />
            </label>
            <label>
                Jurusan: <select>
                    <option value="">Pilih Jurusan</option>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                    <option value="Manajemen">Manajemen</option>
                </select>
            </label>
            <label>
                Jenis Kelamin:
                <input type="radio" value="Laki Laki" />
                <input type="radio" value="Perempuan" />
            </label>
            <label>
                Alamat: <textarea cols="30" rows="10" />
            </label>
            <label>
                Member: <input type="checkbox" value={true} />
            </label>
            </form>
        )
    }
}