/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Avatar from '@uiToolkit/Avatar';
import { ArrowDropDown } from '@assets/iconComponents';
import { Listitem } from './Listitem';

const ListItemStory = {
  title: 'Core Components/Listitem',
  component: Listitem,
};

export default ListItemStory;

export const Normal = () => <Listitem title={'Abhishek Srivastava'} subTitle={'My team, Junior'} />;

export const Disabled = () => (
  <Listitem
    title="Abhishek Srivastava"
    subTitle="My team, Junior"
    isDisabled={true}
    leftComponent={
      <Avatar
        src="data:image/jpeg;base64,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"
        size="medium"
      />
    }
    rightComponent={<ArrowDropDown />}
  />
);

export const ListItemWithNoRightIcon = () => (
  <Listitem
    title="Abhishek Srivastava"
    subTitle="My team, Junior"
    leftComponent={
      <Avatar
        src="data:image/jpeg;base64,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"
        size="medium"
      />
    }
  />
);

export const ListItemWithNoIcons = () => <Listitem title={'Abhishek Srivastava'} subTitle={'My team, Junior'} />;

const subTitle = '';

export const ListItemWithNoMeta = () => (
  <Listitem
    title="Abhishek Srivastava"
    leftComponent={
      <Avatar
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgVFhUYGRgZGhgYGBgYGBgZGBwYGRkaGhwZGBgcIS4lHB4rIRoYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EADwQAAEDAgMGBAUCBQMEAwAAAAEAAhEDIQQSMQUiQVFhcQaBkaETscHR8DJSI0Ji4fEHFHKCkqLCJDND/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhEjEiQVFhE4EEcfAj/9oADAMBAAIRAxEAPwDa/HSDEIV7U0hdKkc/EP8A9yhMXXdBiD0IlQyoqhWCig2ttXI0yMp5ttPp9VgsUc7yRPZbXxPQaabnfzNuO3FY8kZR6hcWeTTo7MMU1ZNsuhTaTLJOU5e/+JUlLDQ8OY8ghwNzyNkK3EaRZwSurhx5H29Vy+RdKJ6FR2u34RcCc8Q4C0nnH2Hmq7HYv42HbnvIsQDa5j7eiy1LHOYYI6GRdX+HxrWWJ5kTcaDn1n19IOHHaKp8tGV2jQLajhxaY+gUDH2g+X2VttpzaldzmkAGB00AkdJEqtqMtkaC7jMXjmu2HlFWcsvGTHU9mvqNLmtJAa498uo7wR6hQYSgSwvBO5BdGoAI+6tNibRdhy+lUGVry2CZ3XOgBw8onoIUNFjG06jWv3gYjSWlzYLjpIOYeizvaCq7CRtgfDIIIcYa0TofwLOPxMvmOM39gfROxVS/Ym3tr5BDZZ14xcLQxRjbXsEskpaD24xzoE2/PurTAUS6OU3k+yo6DCCAVqsFhXOaHU8oA1JIj048lzZ6itaL4bl2X2GoODgN0jnJDhbUAiJvoZV+KYazUCw118uXNZavin02Bz2CL5SM3DXS8Xj5clT1NrueYkwdb/NcKwSntHT+RR0a5+GmoHscA4XyHj0PQ3sbrZ7PxbKlNrhYEWJAHrC8t2ZiZqA3aBJJzQed3LZeG6zhSG44t1kRlPOBqun+OpRlVks3GUS/qk3t8vwhDl5Tn1eAPbUH8CY4Tde5CVo8mcaYmdd8RIWpjgnsnQ/4qUVVASulEIQKyX46GldKBgr4y74pQzXKVqDsw81CuDyla1ODEOQeIz4iZmKn+Ek+EtyNxIi8ojDut5pnw1PRp2QcgqIK5qHep3OQ1RyMTMic5RvIPGE17lDUdwVKFKLxCxjWOOYzBga/gWPyy0tjS481qtuZGtOhJm2qyOz6gksfz3H9ORC4s+3fwdeHSoBrOIPZE7Kqhz8rjroDol2hhiCeMIDC4Vz37vC8yp6cR22maPEUrWOl4QWKrOMDXgLypq1TKyCbxqh8PTM5jrw6KMY/JRy+Cdu7HPUomq1mUuacpDbCdRYSTzvB6oZ7+HqpqNMGM9mkPA4mcptf+ps+ardIm9ivotq0znzB7Ba8g5iT5ASD7Kn2zT+FWewEwWjj1n0kLSbDrjO9jmg7paNOcgg89VmvFDh/uIHABp8vyPJLCVzo0o1GwbD0nOdI4/kyrrZOxxULmuADokAankiPDGMpw9j2C7RDgBMgzqekrebN2bSLRUBAOgNjJnQn7KWbNxtdFMWLls85rbHcDN4FwTr0H5yK1Hg8sc3IQc+sZSRY6z+arTbawUsdDbgTaLWusyzB1MMG12Egxe1o5d1z5JflhXstCPCQX4/Y9tNjGs3Iu7NGvGOPvqsFhm3hewbLxzNoYc0X7riNYBE/8Tb81BWCxPhmrh62R7YDjuO4OExY/RHDNQhxfoWScpkOGwzywkNcQ3ecQOA5dV6V4WoF+EY7MZ1LHQMs8BlNgs7tTZL9zC05Y3I19So1t3El2Vp5tkHitFsSgaQyXFuZIkcWniJ89FbDcvJf5CZWug1zYsRPf78E0Dl7qWq8zcde6ilenFatHDN7o5zU1zFMAnliexKK9zVGjHsQz2p0xWiMlJK5yamFJGuUrHIZOpvug0FMtGKQNQtF6JDlJooiRrFIGKJr1K16RjIa6mnUm2SOelpGyASpcoHhTFMc1VTJsCeEPUCNrsWT8SbSLQabDc2JHDmB1TOSSsEYtuio23iC95aw2BIn5rM4hrmPa4HQ6C0jjKvMmVsBBNwud8G/T7lee5222dqjSFxj8zgRxAR1GmKdObSRJUeHw4z3E5RPRRY95ccvM37Ka+B38gomo+T+kH1RzqaZSYG8OimLyHCIsE1gohxDABY36KUmWtdP6WD1Q9as7P8AxNxrmyxw/ST+1xixTcHWD6nwcxdmFnCLQLzzQlb0BNAjcUWPJnUeXn7Kux5zPlH16Ja8g8CQPIpaVHO9pIm8e/smjS2CW9CbLY8XAPl0uF6H4dxIfSyAgOAzXtdsXjXmhNjbBIpmAQZ/mG65vQiZgz/a6ftHZrsLhn4gHe/QGDSDN+h0HmVyZv8Aq+KL4/BWaqttJmdhzGHtabAm4ABBDRyhHV8Gx7IH6XgiRqCeh07LybAbSxD8ooueXkgwWD4beckiCPdeg7A2jVe99Ko5jizJJZMk2kDt3U3iljQ8cilox5FTCYsuYSMrocOBB4r1zD1GV6DRVYHAtDoIB8weYXnviujGKdbgwnudY5jgtrserlw4H7IaRxgiWkcxCGRu0wNJr9i1tmmnUY8OLmgZQd2YmQHfuHRS1mQe8EECyssK8OZBuCgce3I3JwmW/ULp/iyTpI58je0wR7pt6fZMTM6WV6qVHG3ZM0qXMhQ5L8RajWPeUO5qUvXIrQrIHsTA1EOCjcnTA0REJkKWE1wRsFE9F6La5ANRFNySSGROXJDVTSVG8oUGyUVUTRfZVjnonCVLHv8AQIOJkyEJy5NJWCB7QqZWk8OJXmuPxWetAsJ9Y49luPENSKZMxw1iTGnQc1gC3+JPVRyypUVxx9hDRIRDWRpaV2GYDqpCd/yPouNnUgOrXytcALn89kJSEnqi3szGefy5oZgh3msgsJpsE38kr2bp9Fzeae9kiw80DFc3FPp7ph7P2OuPI8FFUDBVp1mNyyd5vW4RWKp281U1QSBymyvF2iMlTDcXWDnkADrzV14cq0WTnylpJkEw4SBGW1+cdlmnWv8AkqbC4ao4h4aY6TwSSjcewp7PbtjU2/DyAQP1NcDYjn0NrjRdtClSqUn4d4BEscQQY1Fx+6027LJ+DNulp+CQSGzEyHj+kHj69lrceGnI824E8iRwjjp6Lkk+L+zoS5L6MF4rptpV24bDAsY1jA8g7zjEkgnS0aLR+EsK2nugHe7X11KG2jgga4qFtyBBGkaHj59iOS0+yaENBDRABNja97IZJ8qQYx42zP7aoZ8YCYhjTcnWBJj+oa+XFSeFdoTVfQfxG7FgA7eFuF4I4AHsgPEVXK92VxEOyO3SDnNw5rpgmZEeSotkbTy4oOcd5kNcI4CQY/PlYZFqwx3o9SqYjJUDQdRB+/yR2Io/Ep8MwFlVOaKj2uvMeRm8hX2GZu2U8EpKdroTNFKKvsxrqhBg8FK2srHbuA//AEaO4i6omPXvY5qcbR50otMN+Iml6ga5PlVEHhylY5QtCmaEGYc5RPUhCicFkZjQn5UjQpGtWsCRGU5pTyxMyrWGh4qJHOTXBRoGOepcM0we/wBAmgIrDMse/wBAs2ZIYQo3NU2VJUFkllKMp4hvYcvafy6yLmXJWt207WdTwHIaD2lZt4EwubLLZfGtEuFZaUPjHwTe+llYublYFWVwT+BRoqhrKgkD80TKtIZvzgh3NIdKmbXl3kg41sKdjmG5HRF4dk2mJQb7XVpgCHNkC/HshLoKK7H0YceQHqVW0qJJLhoNAefNXm2W2aYvp6oVg/ljWBP0TxfiJJbKR8lxBGhVnsdzoImwmx7cvJG19mGS4gaXjS3FJh8JJt3P9k/aF6ZrvC2HaamYAZr3BkrT4tpDWsyE5jF4s6DvdtQsJsbEnD1M8yNTPzXq9SkypTa8OaQ6C0yIv1Gt5XNkx2m0UjPi1ZT4fZ/8PKR+kx5EER7+yt6TBRw7i79Ia53kBYJcMyMwN4gEc7rP/wCoOPLafww6A4S4dPsVNQSXL9BlJyfH12eWbQ2k93xGE2qPLjynUQOHD/tCZsKiXVgSeIMnnpfzhA1nZnW4f4n5rQbLa1tRgd/MAZj+V4i/Zab8WisVuz0fZToa32H2WlwblnMDTzMEjTTqDYkH5zxhX+zicok+alhjTEzu0FVmDyOqxm2MIWPNrE8JW3qCQq3H4RtWmWnUfpPFd0J/jl9M5GuUTHMcpWlQlha4tOoMHyUrF6FkKJmlStKiaFMwLWahU0hPhcVrMMAUjSo3JMyJiclMcEwOXEoGEcmSleUOXogYSwqwwbt3z+gVOKiNwj7Hv9AlYUyUOUOJdYqcUUJjmkNMHosMmZbaRLmmxvPAACVRNADgtFtN4DYBtHT6FZ1o3h1IC5MvZ0w6DMXoOyq6rW6kkq4rtDjfgJ9FS40wZOkxCl7H9Eb2NOg9PmgazCNJ1Vjgmyx7jYTqeQCiY0vdYWVEKwVuJ0B4f5RmzsdkfB/S6xPI81BjMOJt6quMixHZbimbk0a7aNHM1szAINuUqbDUgXAwEPsXE56Ym5bu35cCrnD0Gzdk8PUKUrWii3szG39lYhpe+jLmPu9guJ5x5LN4SrUa5wdLTwjdM3t2XsuGoNj9FupVV4o2DSfQe9rQHta4tPYTlPTh5q0JWqZKUadnmeIdUdlDXF7nHnmt0nitv4L2Ti3uosquc2hSfnFPRuckuzOHEzz09VZeD/D1NlFlV4DqjgHEO0E3ygdrHrK9B2fSpuplvwsovOXW0cjMlbI9UuwJbt9FjSIcXETeR7ryz/VHaBFb4YO861uDWi49bL1PDNbcDgSCJ7fVeUf6kYUf78v1b8MQbWcJLmz5tN+Y4RPOl42x4PyaMTRbEnorjZQLntDrOGk3BH59VXtpkkfTXutVsQA5Q9odwB0N9L81KXR0o3Ww6jgxrXcdDqO08VfUqEGW6G5HDyVLgKZY2xLm2kcQImSOcclbsqEEDzBFweY7oQSS2RybeiwYbXQtTddPA/kItqCxbTJg9u6vKNxRCPZReIMJfO0d+oVRTcr120GPzMdY3idOv5yKzuIlryPz+67MMnVMnkirtBjVM1AMrIhlRUchEgsBNLUjHKQFZSNRA9qYWomF2VOpAaBYSOep3hDPcihXoirVEI+qn13oUiU1IUIZUVrgju+f0CqKbFZYMbp7/QKbaHUWWHxENX3rcPzRVp2imHHpnQqsg2jQEFxjoFmnsioBy+l1oMVirT+W/us86qPiT1XJmS9HXibJXVP4kczHlB+oCqdsxAjiiRUBqNPUpuLYHuYI4j5qCLE1PChrAyNYn88l1BgiI1t5ak/NGAS4dSPl/lMos1J0v9kyYpXYlsNLzqbAfn5ZUdUAk9OKtsfXzvLG9B2VY8ZoDdATPUp4gZY+H6mU5dM027AR8itngKwMCbjn91g6xNN7HjhBIVvgtrRUG6SIm1z6Kc03tDRdaN9RBiZtroqTxPtamyk9jnbzwcrf5ndOgM6quZt2viAWUWGmwC73XdpaG6Axe6q9oeH3EZjmc86ucSSY/BAuqwjxROTtmt8K49lSizK64EObxaeRH1W2w2DqBoDSAAZkm/Yrx3YuyqjKoc0uY6BcZrzwjjroeRK9e2ZXxDKbQ+mXzG8z9QHUHUdvRCSvsF10W+GDp3g2wvBk9eHRef8AjNjKtN1Rrd1xLrWcHhzKcg8nNJNxymDpu8XtCnRZmeQzMLSIvGh69FgcdXY+i1jXAB1SANA0fDDS2OUgnzBU5NKI2NNyswrAA4CZbpP6S08iOHuI0Jhazw+wF+Q2dY3g6E36i3cSs5tOkWVC12hOWD/SAD7q42O6Wtbm327zDzF92ecAR1AXPJHSmekbOAAAuJ66O1I7aHzR+HcLtNuUfljoqbZmMa8AGznC4i8yb+s/hVywSM3Y+2qMX8EZr5CqdrFRY1st6wVLq0jiqs48OEEwQcp6O4T3uPRVbqNEoq3ZktqVd4u4izhxBB1CrHYgmDPdW3iHD75ezjAc3k4cR3Czw1V4SVCyjss6D5VlQCqcKregVRtE6DWAJxcFBnTHvSjE5eEhqIN9RRPqFMpI3ELe9C1CoTUK7MqLIkI4WR1AmMapiyUmVLLMNHHQ9jUbhP0nv9AgQ5F4M7p7/QKDm2ytIocq5EmmoKjYVpZCSiA49+7HOyzG0MTlbqtFjdCsPtl5mJ4qL8mVjpBOBx01G31i3XgrllYZteP1P3WKoVSHSOGi0b64OVw4lp+4QlDYykabD3DD3nuuxDoZ3t7XQ+x6+dh6OPpBg/NM21iMlO2sG3e31S0FMpaRl7nRqT72+6lwmG/hknoSlwtOW5uk/JWjKMUr6xPn+FNYQDG0JbPT5THyTfDD2trkP0jdPfVWGKbuxyb87Klw9OXvInUQQgmaj1TD4VuXdAvyRH+1Bkxw+SxLduVGU2AcMvsf7LRbL24HyDYiTfpw9ws5tm40XezcG3OJaNQR3bp+dVsqWiwuH22xtwZM24WGp7fYq0w3ilhY+92uyzwBLJHuPdNGSXYkot9Af+pzi3CscNRUbbnYkW6FoPksHgt+mGNdJnPfUOMgg9YynzKuPHG1zWqMaLMAmJ1cY19u1+azuGcaVQPH6dHQCYB1trHZRyyUnorji0tmrx+x24miCBFRrW66EgXn5Tyjksvgw9lX4T5Dm6TxadD6hembPY3I17Lty+lwRHODI7HqqHxzs/IG12skTvxqAe3XjpEAqaVoblsN2a0zlJgnQ8nai3EfSFodlYrNLXWdJBHycO/zWD2Ftpj2hrnQQYY7gdBlzGwM6d1rqVSSx41g62nm09be3RLFOLBPyRdV6mQB7rAGCRpB4npMLFbTxWXF1Gid45TPWOP/AGkFaramKHwHusQGyQeLSCD8x6LzvPne4ySHNEg8C2GtM8Zy3/urUnolDTs0WKw7nYf4rd7KN9p4jiR1HLqVlnOk/n5K2+x8R/CDXfpIAM9bELGV6eSo9n7XOb6GEsJeh8kfYThgj2PKBolGMKspMlxJjUKYXlKuW5MPESCmuapQUspeQaB8ic1qkco3ORs1DwuUReuD0KMSAIzCAQe/0CrXVEVg37p7/QIpGYFKiqNlK0pHoWwUVeOYA0uOgBPovPdqvkzzn3Wz8T4iGNYNXXPYf3WMxzJHYJ4MzWitpfqCOp1TLB/VfsRJ+RVcdVO98Dr/AGhWaETNH4VxZ+I9p/nbA7gmPmUviPFH4oI0Fj5gFZ7CYosIcDcfRH7RxIfvcxpyjmlcdhTLzZ7gafkPn9oVsCMjZ5fOQstsnFbuU/lwVYvxs0m30BnyJH0ScR7CdqYiGmNXWHl/k+iXZGG3e5+/2VVVxWdzeVvkD9VpdmsywPT1P3SvQUyF1OSQeJkdo/PZSU2Fjz2B7iIhLjRFxwg+hCIdcA8cvyJSUPZCKe+69v0+Rmfmi8PTv1dvdJv9ENhb37T8kQH6Dt9P8eSDQbExglzCeRRODwrXAgiRFx3MAjsY9UOzei0wYVtsoAvyRvQSOou77+YCSQR3hrbBoVDQqndDZY4mXFkwZH80Ej3W1xmFZXoupn+YS0i/IiPRZnFYVprElt2PAMDQOaI7tNtP3K52JVLYp5piXMOk0y6QO7RYjstHsnL5R4s6mKeJqUQ5zbuBa4WEmRDuI7hbbwz4mDmCjWkPbmGe94JAMRcgQY4hvHQ5D/USmGY1zwN0lwzNmzgcwa7rDm313eMIDCYkvDXAgObldIIBkCzuXCJ6dVbhasXl6PZq9YPplrHD9LmPAPOcrgONyDP3WMwbt68C5ExAAMkzHCXf+SF2ZtZ7XsdoGm4sZaQN694I3S3hu8NHPrNNV06FxgC46nTllsglQxvdk0w6i2NQI9ND7fNY/aNecRUP9bvYwtL4VrEtIuY4xwkqj8YYQ08TmA3agDv+oWd9D5qeJLkx8l0iGjVRVOsqem8oum9dFES1a9OD0E16c2ohQQwvTPiKDMmucl4msINRRueosyUJjHFy4PSlqVrELMNc5F4M7p7/AECEc1HYJu6e/wBAsmBgQamveuLkNVcgkEy+3quaq7jlAb7T9VnsQDJ5K62j/wDY/v8AQKqqXaUy0EpntgqN5U9dqHKsmSYrD9FMX280OE6bD1RYLJhiC0iESMZaBoTPrqAqx5uka5CjWW2Gr6D8t/ZbPAYgFjHdB6i3zXndN8GVf7N2lDMrtPz7BJKI0ZGo+MHAsPT3ROHfLY4ifdZ+ni99hmxMdw7Q+Ss34nI49bKbiUUgrD1crnCeIj1XOqQ4Hp7Sqb49y4a/UFE/7gPGvbpy/OqWhrLSjWyucP8AqHt9/ZXWBAe5j2HeaZHaRI9T7rHVqxztPQSP+Q0ReAx7qdQMk5SCfMdf+JPmlcbNyPU9o0C5rarDvBrZym8tII8j/wCvcqox20HU6p0EEPbwAY97Wvvpq6QOh8oqu2A/DACQ8tbGaIDwbSbEgTNrwTpqsd4s2w9jmOu2wY9rmkgtMZi08QJm9wT1CKjbEsD8bn/5D2vO5V3w4ARnByydOBaCOvUFZFlNzCW8jAOhBkOBHeAY6K0x2Nc8b4Fw05hvnMxraeaLiYZraYPE3kw9LM3K4AmNwmYcP2z5m/XsrLxQKtlj4faXgtdxuD+0yDM8jB9Y5K1w1OXPa4AEZgREQW6D85KowTjQfmmWuA9CQCDGsOj1K0WGe178wAGZtz6t8ikY6NX4ScchHU8IuLTHkl8bYfNRa/ixw9DY/Rd4YxAyhkaAkkcMpj58Ubt8h1B41sT2gyFzxlW/spJW6+jA06aLpsXMapWrpsgSMYlDUrSnNKWwiFqaGqQlIFjC5UgapAnALGInLpT3LgEDEZRuDG6e/wBAhvho3Bt3T3+gTIDK97ELVprlyVDMym28PkrE8HNnzFlQB8uISrkyAA4lqAelXK0OicuxqU2j84pVycUjcmhcuWMPUtKrC5cgYMw+LjKP2kH2hWVXaGb89Fy5KxkPbW3S7uCm08VBubT7G65ckHDKmLADBMXLge5t6bwTBi2NrZS4hhBcxw4SMxlo1ES0g8ly5DijA7tovuwuzMa4OECWkMjLfXpfmEPicY54bmAMNMm+8JzTY2MykXJqAMDjm5Brp0Fw6QSHdbW4/O5weGztcRqwA2IsOY5j5XSrkshohlapmgEibyOEnLaOAMC3M9FJSxZpvBBsYI9SL84IaFy5AY07dpfCw5e39T3sY2f6jf8A8Wn1Vpj8YTSJINwGxyJj10XLlyyStf2W9P8AopGFTU1y5dByonlOYFy5YYcWrg1cuQMNcUmZcuTGOzKRrly5Yw74iNwbt09/oEi5ZGZ//9k="
        size={subTitle ? 'medium' : 'small'}
      />
    }
    rightComponent={<ArrowDropDown />}
  />
);

export const ListItemWithRightComponent = () => (
  <Listitem title="Abhishek Srivastava" subTitle="My team, Junior" rightComponent={<ArrowDropDown />} />
);

export const ListItemWithOnlyTitle = () => <Listitem title="Abhishek Srivastava" />;
