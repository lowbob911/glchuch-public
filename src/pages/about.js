import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import churchImg from "../../assets/img/church.jpg"
import BasicWrapper from "../components/BasicWrapper";

export default function Home() {
    return (
        <BasicWrapper>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="text-center">
                        <h1 className="main-color">
                            Церковь "Свет Евангелия"<br/>
                            Евангельских Христиан Баптистов
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img src={churchImg}
                                 alt="Иллюстрация" className="main-page-image"
                            />
                        </div>
                        <div className="col-lg-8">
                            <p>
                                Находится в <i>г. Минске, микрорайон Серебрянка, ул. Яна Райниса 6</i>.<br/>
                                Двери церкви всегда открыты для тех, кто ищет поместную общину верующих, для общения и духовного роста, или желает больше узнать о Боге и
                                новой жизни, которую мы имеем по вере в Него.<br/><br/>
                                В Церкви еженедельно проводятся Богослужения, молитвенные собрания, кружки по изучению Библии, молодежные общения, воскресная школа.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-center mt-2 main-color">Евангельские христиане-баптисты. Кто они? Какова их история?</h4>
                        </div>
                        <div className="col-12"><p>
                            Слово «христиане» в названии является основным и прямо связывает их с именем Господа и Спасителя Иисуса Христа. Слово «евангельские» говорит о том, что свою веру и служение Богу они основывают на Евангелии. Слово «баптист» берет свое начало из оригинальных текстов Нового Завета, которые были написаны на греческом языке. В переводе с греческого слово «баптизм» (Βάπτισμα) – означает крещение, погружение. Из этого общего термина и происходит направление в христианстве, которое особое внимание уделяет крещению. Поэтому баптисты совершают сознательное крещение в воде по вере в Господа Иисуса Христа и отрицают крещение в младенчестве.<br/>
                            Другой отличительной чертой баптистов является их отношение к Библии. Для баптистов Библия и только Библия является непогрешимым источником и авторитетом в вопросах доктрины и жизни.<br/>
                            Практика крещения по вере и в сознательном возрасте начинается со дней Христа и апостолов. Христиане, практикующие крещение взрослых, существовали всегда, правда, именем баптисты они стали называться только около 400 лет тому назад.<br/>
                            Иисус Христос и апостолы были крещены в сознательном возрасте. Также сознательно, после покаяния и свидетельства о своей вере в Иисуса Христа приняли крещение первые 3000 христиан в день Пятидесятницы, который стал днем рождения Церкви Христовой.<br/>
                            Такие выдающиеся служители Церкви как Иоанн Златоуст, Григорий Богослов, Василий Великий также крестились, будучи взрослыми, после сознательного обращения ко Христу.<br/>
                            В Европе к практике крещения по вере вернулись в начале семнадцатого века. В 1612 году возникла первая баптистская церковь в Англии. Баптисты вернулись к библейской практике крещения погружением. Именно этот способ лучше всего символизирует крещение в смерть и воскресение Иисуса Христа, как говорит Апостол Павел в послании к Римлянам в 6 главе.<br/>
                            В России движение баптистов началось в 60-х годах XIX века почти одновременно на Кавказе, в Санкт-Петербурге, Южной Украине и Беларуси, когда Дух Святой породил великое богоискательство в народе, и за короткое время вобрало в себя самых разных людей: крестьян, ремесленников, рабочих, студентов, интеллигенцию. Несмотря на непрекращающиеся репрессии, это движение достигло к 1917 году численности 200 тысяч человек. Сегодня к семье баптистов принадлежат более 170 млн. христиан. Мы верим, что все люди грешны и нуждаются в искуплении своих грехов. Наш Искупитель — Иисус Христос, умерший на кресте Голгофы.<br/>
                            Баптисты – часть Вселенской Церкви, которые в своей жизни и служении добровольно объединяются вокруг Господа и Спасителя нашего Иисуса Христа и авторитета Слова Божьего.<br/>
                            Евангельские христиане-баптисты. Кто они? Какова их история?<br/>
                            Слово «христиане» в названии является основным и прямо связывает их с именем Господа и Спасителя Иисуса Христа. Слово «евангельские» говорит о том, что свою веру и служение Богу они основывают на Евангелии. Слово «баптист» берет свое начало из оригинальных текстов Нового Завета, которые были написаны на греческом языке. В переводе с греческого слово «баптизм» (Βάπτισμα) – означает крещение, погружение. Из этого общего термина и происходит направление в христианстве, которое особое внимание уделяет крещению. Поэтому баптисты совершают сознательное крещение в воде по вере в Господа Иисуса Христа и отрицают крещение в младенчестве.<br/>
                            Другой отличительной чертой баптистов является их отношение к Библии. Для баптистов Библия и только Библия является непогрешимым источником и авторитетом в вопросах доктрины и жизни.<br/>
                            Практика крещения по вере и в сознательном возрасте начинается со дней Христа и апостолов. Христиане, практикующие крещение взрослых, существовали всегда, правда, именем баптисты они стали называться только около 400 лет тому назад.<br/>
                            Иисус Христос и апостолы были крещены в сознательном возрасте. Также сознательно, после покаяния и свидетельства о своей вере в Иисуса Христа приняли крещение первые 3000 христиан в день Пятидесятницы, который стал днем рождения Церкви Христовой.<br/>
                            Такие выдающиеся служители Церкви как Иоанн Златоуст, Григорий Богослов, Василий Великий также крестились, будучи взрослыми, после сознательного обращения ко Христу.<br/>
                            В Европе к практике крещения по вере вернулись в начале семнадцатого века. В 1612 году возникла первая баптистская церковь в Англии. Баптисты вернулись к библейской практике крещения погружением. Именно этот способ лучше всего символизирует крещение в смерть и воскресение Иисуса Христа, как говорит Апостол Павел в послании к Римлянам в 6 главе.<br/>
                            В России движение баптистов началось в 60-х годах XIX века почти одновременно на Кавказе, в Санкт-Петербурге, Южной Украине и Беларуси, когда Дух Святой породил великое богоискательство в народе, и за короткое время вобрало в себя самых разных людей: крестьян, ремесленников, рабочих, студентов, интеллигенцию. Несмотря на непрекращающиеся репрессии, это движение достигло к 1917 году численности 200 тысяч человек. Сегодня к семье баптистов принадлежат более 170 млн. христиан. Мы верим, что все люди грешны и нуждаются в искуплении своих грехов. Наш Искупитель — Иисус Христос, умерший на кресте Голгофы.
                            Баптисты – часть Вселенской Церкви, которые в своей жизни и служении добровольно объединяются вокруг Господа и Спасителя нашего Иисуса Христа и авторитета Слова Божьего.<br/>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </BasicWrapper>
    )
}

