window.onload = function () {
    document.getElementById("download1")
        .addEventListener("click", () => {
            const invoice1 = this.document.getElementById("dou");
            console.log(invoice1);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(invoice1).set(opt).save();
        })
        document.getElementById("download2")
        .addEventListener("click", () => {
            const invoice2 = this.document.getElementById("bar");
            console.log(invoice2);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(invoice2).set(opt).save();
        })
        document.getElementById("download3")
        .addEventListener("click", () => {
            const invoice3 = this.document.getElementById("pie");
            console.log(invoice3);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(invoice3).set(opt).save();
        })
}