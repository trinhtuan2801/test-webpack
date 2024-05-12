import LogoUrl, { ReactComponent as LogoIcon } from '@/assets/webpack-icon.svg';

export default function Logo() {
  return (
    <div>
      <img src={LogoUrl} width={100} />
      <LogoIcon width={100} className='logo' />
    </div>
  );
}
