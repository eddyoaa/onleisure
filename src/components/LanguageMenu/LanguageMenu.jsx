import "./LanguageMenu.css"

const LanguageMenu = () => {
    return (

        <>
        <div className="container">
            <table className="table-left">
                <tr> <td>Deutsch</td> </tr>
                <tr> <td>English</td> </tr>
                <tr> <td>Русский</td> </tr>
                <tr> <td>українська</td> </tr>
            </table>

            <div className="vertical-line"></div>

            <table className="table-right"> 
                <tr> <td>عربي</td> </tr>
                <tr> <td>فارسی</td> </tr>
                <tr> <td>Türk</td> </tr>
                <tr> <td>Kurdî</td> </tr>
            </table>
        </div>
        </>
    );
}
 
export default LanguageMenu;